// Placeholder untuk halaman yang belum ada isinya. Harus jadi halaman beneran
// (bukan 404) supaya pindah tab tidak memicu reload penuh & loading screen.
export default function ComingSoon({ title }) {
  return (
    <main className="notfound">
      <h1>{title}</h1>
      <p>Page is under construction</p>
    </main>
  );
}
