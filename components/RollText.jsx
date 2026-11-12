// Efek huruf "berputar" saat hover — tiap huruf punya 5 salinan bertumpuk,
// sama seperti teks "HHHHHOOOOOMMMMMEEEEE" di web aslinya.
const COPIES = 5;

export default function RollText({ text }) {
  return (
    <span className="roll" aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <span className="roll__col" aria-hidden="true" key={i} style={{ "--i": i }}>
          {Array.from({ length: COPIES }).map((_, k) => (
            <span className="roll__char" key={k}>
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
