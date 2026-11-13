import Image from "next/image";

// Gambar yang otomatis dikecilkan & dikonversi (WebP) sesuai lebar layar,
// supaya di HP tidak perlu download file asli yang berukuran MB.
// Mengisi penuh kotak induknya (induk harus position: relative/absolute).
// sizes = perkiraan lebar gambar di layar, dipakai untuk memilih ukuran file.
export default function Pic({ src, alt = "", sizes = "100vw", ...rest }) {
  // SVG & GIF tidak bisa/perlu dikecilkan, tampilkan apa adanya.
  const raw = /\.(svg|gif)($|\?)/i.test(src);
  return <Image src={src} alt={alt} fill sizes={sizes} unoptimized={raw} {...rest} />;
}
