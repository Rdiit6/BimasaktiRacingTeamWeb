import fs from "fs";

// Baca rasio lebar/tinggi gambar langsung dari header file (tanpa library).
// Mendukung JPEG (termasuk orientasi EXIF foto HP), PNG, WebP, GIF.
// Return null kalau formatnya tidak dikenali.
export default function imageRatio(file) {
  let buf;
  try {
    const fd = fs.openSync(file, "r");
    buf = Buffer.alloc(256 * 1024);
    const n = fs.readSync(fd, buf, 0, buf.length, 0);
    fs.closeSync(fd);
    buf = buf.subarray(0, n);
  } catch {
    return null;
  }
  const size = readSize(buf);
  if (!size || !size.w || !size.h) return null;
  return size.rotated ? size.h / size.w : size.w / size.h;
}

function readSize(b) {
  // PNG
  if (b.readUInt32BE(0) === 0x89504e47) return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
  // GIF
  if (b.toString("ascii", 0, 3) === "GIF") return { w: b.readUInt16LE(6), h: b.readUInt16LE(8) };
  // WebP
  if (b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WEBP") {
    const type = b.toString("ascii", 12, 16);
    if (type === "VP8 ") return { w: b.readUInt16LE(26) & 0x3fff, h: b.readUInt16LE(28) & 0x3fff };
    if (type === "VP8L") {
      const bits = b.readUInt32LE(21);
      return { w: (bits & 0x3fff) + 1, h: ((bits >> 14) & 0x3fff) + 1 };
    }
    if (type === "VP8X") return { w: b.readUIntLE(24, 3) + 1, h: b.readUIntLE(27, 3) + 1 };
  }
  // JPEG
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    let rotated = false;
    while (i + 9 < b.length) {
      if (b[i] !== 0xff) { i++; continue; }
      const marker = b[i + 1];
      const len = b.readUInt16BE(i + 2);
      if (marker === 0xe1 && b.toString("ascii", i + 4, i + 8) === "Exif") {
        const o = exifOrientation(b, i + 10);
        rotated = o >= 5 && o <= 8;
      }
      // SOF0..SOF15 kecuali DHT/JPG/DAC
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7), rotated };
      }
      i += 2 + len;
    }
  }
  return null;
}

function exifOrientation(b, tiff) {
  if (tiff + 8 > b.length) return 1;
  const le = b.toString("ascii", tiff, tiff + 2) === "II";
  const u16 = (p) => (le ? b.readUInt16LE(p) : b.readUInt16BE(p));
  const u32 = (p) => (le ? b.readUInt32LE(p) : b.readUInt32BE(p));
  const ifd = tiff + u32(tiff + 4);
  if (ifd + 2 > b.length) return 1;
  const count = u16(ifd);
  for (let k = 0; k < count; k++) {
    const e = ifd + 2 + k * 12;
    if (e + 10 > b.length) break;
    if (u16(e) === 0x0112) return u16(e + 8);
  }
  return 1;
}
