# Bimasakti Racing Team — Web (rebuild)

Rebuild dari https://bimasakti-evo-fe.vercel.app memakai Next.js 14 (App Router).

## Cara menjalankan

```bash
npm install
npm run assets   # unduh semua gambar & ikon dari web lama ke public/ (sekali saja)
npm run dev      # buka http://localhost:3000
```

> Jalankan `npm run assets` selagi web lama masih online. Setelah itu gambar
> tersimpan di `public/` dan tidak bergantung lagi ke web temanmu.

## Struktur

```
app/            layout, halaman Home, halaman 404
components/     Loader, Navbar, RollText, Hero, Story, Sponsors, RaceWithUs, Journey
data/site.js    semua teks, link sosmed, link kontak, daftar sponsor per tier
public/assets/  gambar & ikon (diisi oleh npm run assets)
scripts/        download-assets.mjs
```

## Yang perlu disesuaikan

- Warna & font: bagian `:root` di `app/globals.css` dan font di `app/layout.jsx`.
- Logo sponsor: isi array `sponsors` di `data/site.js`.
- Link CONTACT US: `CONTACT_URL` di `data/site.js`.
- Halaman About, Cars, News, Sponsors, Gallery: di web asli masih 404, jadi di sini
  juga memakai `app/not-found.jsx`. Buat `app/about/page.jsx` dst. untuk mengisinya.
