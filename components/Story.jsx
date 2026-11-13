import findImage from "@/lib/findImage";
import Pic from "./Pic";

// Bagian cerita bergaya panel komik.
// Foto ada di public/assets/image/storySection/panel-1 ... panel-8 (format bebas),
// urut dari kiri-atas ke kanan-bawah. Ganti filenya saja untuk ganti foto.
function Panel({ n, alt, area, children, className = "" }) {
  const src = findImage("assets/image/storySection", `panel-${n}`);
  return (
    <figure className={`panel ${className}`} style={{ gridArea: area }}>
      {src && <Pic src={src} alt={alt} sizes="(max-width: 760px) 100vw, 60vw" />}
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
          by="FARHAN ABIDZAR, BM-16 CAPTAIN"
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
        {/* Kutipan dibagi jadi 2 kotak, ditumpuk atas-bawah */}
        <div className="quote-split" style={{ gridArea: "q2" }}>
          <blockquote className="quote">
            <h2>&ldquo;TOP SPEED ISN'T ABOUT HOW HARD YOU PUSH THE THROTTLE, IT'S ABOUT MASTERING EVERY CORNER WITH PRECISION&rdquo;</h2>
           <cite>- TAZZAKA ARRIFIN, BM-15H DRIVER</cite>
          </blockquote>
          <blockquote className="quote">
            <h2>&rdquo;EVERY LAP IS A DIALOGUE BETWEEN ENGINEERING & INSTINCT, AND I AM THE TRANSLATOR&rdquo;</h2>
            <cite>- ABDURRAHMAN WAHID ATHALLAH, BM-15H DRIVER</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
