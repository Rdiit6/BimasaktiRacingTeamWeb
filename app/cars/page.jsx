import fs from "fs";
import path from "path";
import CarsTimeline from "@/components/CarsTimeline";
import Journey from "@/components/Journey";
import { CARS } from "@/data/site";

export const metadata = { title: "Cars | Bimasakti Racing Team" };

const IMAGE_EXT = /\.(png|jpe?g|webp|avif)$/i;

// Ambil foto dari public/assets/image/cars/<tahun>/: pakai cover.* kalau ada
// (versi kecil yang sudah di-crop 16:10), kalau tidak file pertama sesuai nama.
function getCarImages() {
  const images = {};
  for (const { year } of CARS) {
    const dir = path.join(process.cwd(), "public/assets/image/cars", String(year));
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter((f) => IMAGE_EXT.test(f)).sort();
    const file = files.find((f) => /^cover\./i.test(f)) || files[0];
    if (file) images[year] = `/assets/image/cars/${year}/${encodeURIComponent(file)}`;
  }
  return images;
}

export default function CarsPage() {
  return (
    <>
      <main className="cars">
        <header className="cars__head">
          <span className="ghost" aria-hidden="true">Cars</span>
          <h1 className="section-title">OUR CARS</h1>
          <p className="cars__sub">EVERY GENERATION, EVERY MILESTONE</p>
        </header>
        <CarsTimeline images={getCarImages()} />
      </main>
      <Journey />
    </>
  );
}
