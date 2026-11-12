// Mengunduh semua gambar & ikon dari web lama ke folder public/
// Jalankan sekali: npm run assets   (butuh Node 18+ dan internet)
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE = "https://bimasakti-evo-fe.vercel.app";
const FILES = [
  "/icon.png",
  "/assets/logo/logo-white.svg",
  "/assets/icon/navicon.svg",
  "/assets/icon/yt.svg",
  "/assets/icon/ig.svg",
  "/assets/icon/tt.svg",
  "/assets/icon/x.svg",
  "/assets/image/profileSection/top.png",
  "/assets/image/profileSection/bottom.png",
  "/assets/image/storySection/panel2.jpg",
  "/assets/image/storySection/panel3.jpg",
  "/assets/image/storySection/2.jpg",
  "/assets/image/storySection/3.jpg",
  "/assets/image/storySection/Story1.png",
  "/assets/image/storySection/Panel1.png",
  "/assets/image/storySection/Panel4.png",
  "/assets/image/storySection/Panel5.png",
  "/assets/image/preContentSection/main.png",
];

let ok = 0;
for (const file of FILES) {
  const target = path.join(process.cwd(), "public", file);
  try {
    const res = await fetch(BASE + file);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, Buffer.from(await res.arrayBuffer()));
    console.log("✔", file);
    ok++;
  } catch (err) {
    console.log("✘", file, "-", err.message);
  }
}
console.log(`\n${ok}/${FILES.length} file berhasil diunduh ke public/`);
