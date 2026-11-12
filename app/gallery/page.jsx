import fs from "fs";
import path from "path";
import Journey from "@/components/Journey";
import imageRatio from "@/lib/imageRatio";
import { CARS } from "@/data/site";

export const metadata = { title: "Gallery | Bimasakti Racing Team" };

const IMAGE_EXT = /\.(png|jpe?g|webp|avif|gif)$/i;
// BM-9 & BM-10 tidak ada.
const MODELS = [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15];
// Nama yang ditampilkan; BM-14 & BM-15 pakai akhiran H. Folder tetap bm-<nomor>.
const label = (n) => `BM-${n}${n === 14 || n === 15 ? "H" : ""}`;
// Jumlah maksimal foto di dropdown per BM.
const photoLimit = (n) => (n >= 11 ? 15 : 5);

// Foto tiap mobil ada di public/assets/gallery/bm-<n>/.
// cover.* dipakai untuk kotak judul, sisanya muncul di dropdown (urut nama file).
function getPhotos(n) {
  const dir = path.join(process.cwd(), "public/assets/gallery", `bm-${n}`);
  if (!fs.existsSync(dir)) return { cover: null, photos: [] };
  const toUrl = (f) => `/assets/gallery/bm-${n}/${encodeURIComponent(f)}`;
  const files = fs
    .readdirSync(dir)
    .filter((f) => IMAGE_EXT.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  // Kalau tidak ada file cover.*, foto pertama yang jadi cover. Cover tidak ikut di dropdown.
  const cover = files.find((f) => /^cover\./i.test(f)) || files[0];
  const photos = files
    .filter((f) => f !== cover)
    .map((f) => ({ src: toUrl(f), ratio: imageRatio(path.join(dir, f)) || 1.5 }));
  return { cover: cover ? toUrl(cover) : null, photos };
}

// Rasio kotak placeholder selama foto belum ada.
const PLACEHOLDER_RATIOS = [1.78, 1, 1.5, 0.75, 1.33, 1.78, 1.5];

// Tahun diambil dari data CARS berdasarkan generasi (1st = BM-1, dst).
function getYears(n) {
  const years = CARS.filter((c) => parseInt(c.gen, 10) === n).map((c) => c.year);
  if (years.length === 0) return null;
  return years.length === 1 ? `${years[0]}` : `${years[0]}–${years[years.length - 1]}`;
}

export default function GalleryPage() {
  const items = MODELS.map((n) => {
    const { cover, photos } = getPhotos(n);
    return { n, years: getYears(n), cover, photos: photos.slice(0, photoLimit(n)) };
  });

  return (
    <>
      <main className="gallery">
        <header className="gallery__head">
          <span className="ghost" aria-hidden="true">Gallery</span>
          <h1 className="section-title">GALLERY</h1>
          <p className="gallery__sub">EVERY CAR, EVERY ERA — BM-1 TO BM-15H</p>
        </header>

        <div className="gallery__list">
          {items.map(({ n, years, cover, photos }) => (
            // name yang sama = cuma 1 dropdown yang bisa terbuka; buka satu, yang lain otomatis tertutup
            <details className="era" name="gallery-era" key={n}>
              <summary className="era__head">
                <div className="era__cover panel">
                  {cover ? <img src={cover} alt={label(n)} loading="lazy" /> : <span className="era__empty">{label(n)}</span>}
                </div>
                <div className="era__text">
                  <h2 className="era__title">{label(n)}</h2>
                  {years && <p className="era__year">{years}</p>}
                  <p className="era__count">{photos.length > 0 ? `${photos.length} PHOTOS` : "PHOTOS COMING SOON"}</p>
                </div>
                <span className="era__chevron" aria-hidden="true" />
              </summary>

              {/* Baris "justified": foto utuh sesuai rasionya, satu baris tingginya sama */}
              <div className="era__grid">
                {photos.length > 0
                  ? photos.map(({ src, ratio }, i) => (
                      <figure className="panel era__photo" key={src} style={{ "--r": ratio }}>
                        <img src={src} alt={`${label(n)} photo ${i + 1}`} loading="lazy" />
                      </figure>
                    ))
                  : Array.from({ length: Math.min(photoLimit(n), 7) }).map((_, i) => (
                      <div
                        className="panel era__photo era__slot"
                        key={i}
                        style={{ "--r": PLACEHOLDER_RATIOS[i % PLACEHOLDER_RATIOS.length] }}
                        aria-hidden="true"
                      />
                    ))}
                <span className="era__filler" aria-hidden="true" />
              </div>
            </details>
          ))}
        </div>
      </main>
      <Journey />
    </>
  );
}
