import findImage from "@/lib/findImage";

// Bagian cerita bergaya panel komik.
// Foto ada di public/assets/image/storySection/panel-1 ... panel-8 (format bebas),
// urut dari kiri-atas ke kanan-bawah. Ganti filenya saja untuk ganti foto.
function Panel({ n, alt, area, children, className = "" }) {
  const src = findImage("assets/image/storySection", `panel-${n}`);
  return (
    <figure className={`panel ${className}`} style={{ gridArea: area }}>
      {src && <img src={src} alt={alt} loading="lazy" />}
      {children}
    </figure>
  );
}

function Caption({ children, pos = "tl" }) {
  return <figcaption className={`caption caption--${pos}`}>{children}</figcaption>;
}

function Quote({ text, by, area }) {
  return (
    <blockquote className="quote" style={{ gridArea: area }}>
      <h2>&ldquo;{text}&rdquo;</h2>
      <cite>- {by}</cite>
    </blockquote>
  );
}

export default function Story() {
  return (
    <section className="story">
      <div className="story__grid story__grid--a">
        <Panel area="p11" n={1} alt="Panel 1.1">
          <Caption pos="tl">FS ITALY, 2026</Caption>
        </Panel>
        <Panel area="p12" n={2} alt="Panel 1.2">
          <Caption pos="br">AUTODROMO RICCARDO<br />PALETTI - VARANO</Caption>
        </Panel>
        <Quote
          area="q1"
          text="A JOY, TO BE ABLE TO BUILD AN ENGINEERING MASTERPIECE AMONG PEERS"
          by="RAFI, GEN-14 TECHNICAL CHIEF"
        />
        <Panel area="p2" n={3} alt="Panel 2">
          <Caption pos="tl">BUILT FROM OBSESSION</Caption>
          <Caption pos="br">NOT EXPECTATION</Caption>
        </Panel>
        <Panel area="p3" n={4} alt="Panel 3" className="panel--wide">
          <Caption pos="bl">The origin, 1st Gen Car</Caption>
        </Panel>
      </div>

      <div className="story__grid story__grid--b">
        <Panel area="p42" n={5} alt="Panel 4.2">
          <Caption pos="tl">FS SPAIN, 2024</Caption>
        </Panel>
        <Panel area="p41" n={6} alt="Panel 4.1">
          <Caption pos="tr">BM-14H JEMBO CABLE</Caption>
        </Panel>
        <Panel area="p43" n={7} alt="Panel 4.3">
          <Caption pos="bl">CIRCUIT DE BARCELONA<br />CATALUNYA</Caption>
        </Panel>
        <Panel area="p5" n={8} alt="Panel 5" className="panel--wide" />
        <Quote
          area="q2"
          text="EVERY LAP IS A DIALOGUE BETWEEN ENGINEERING AND INSTINCT, WHILE I AM THE TRANSLATOR"
          by="ABDURRAHMAN WAHID ATHALLAH, BM-14H DRIVER"
        />
      </div>
    </section>
  );
}
