import fs from "fs";
import path from "path";

const IMAGE_EXT = /\.(png|jpe?g|webp|avif|gif|svg)$/i;

// Cari gambar di public/<dir>/ bernama <name>.<ekstensi apa saja>.
// Jadi foto bisa diganti langsung tanpa ubah kode, formatnya bebas.
// ?v=<waktu ubah> supaya browser tidak menampilkan foto lama dari cache.
export default function findImage(dir, name) {
  const abs = path.join(process.cwd(), "public", dir);
  if (!fs.existsSync(abs)) return null;
  const file = fs
    .readdirSync(abs)
    .find((f) => IMAGE_EXT.test(f) && f.replace(IMAGE_EXT, "").toLowerCase() === name.toLowerCase());
  if (!file) return null;
  const v = Math.round(fs.statSync(path.join(abs, file)).mtimeMs);
  return `/${dir}/${encodeURIComponent(file)}?v=${v}`;
}
