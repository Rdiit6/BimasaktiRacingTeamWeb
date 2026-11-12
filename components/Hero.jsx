// Bagian "profile": foto mobil full-screen dengan tulisan BIMASAKTI raksasa di atasnya.
export default function Hero() {
  return (
    <section className="hero">
      <img className="hero__bg" src="/assets/image/profileSection/hero.jpg" alt="Bimasakti Profile" />
      <h1 className="hero__title">BIMASAKTI</h1>
      <p className="brand-sub">RACING TEAM</p>

      <p className="hero__tagline">
        <span>KEEP</span>
        <span>ACCELERATING</span>
        <span>FORWARD.</span>
      </p>
      <p className="hero__uni">UNIVERSITAS GADJAH MADA</p>
    </section>
  );
}
