import { SOCIALS } from "@/data/site";

export default function Journey() {
  return (
    <footer className="journey">
      <span className="ghost" aria-hidden="true">Journey</span>
      <h2 className="section-title">OUR JOURNEY</h2>
      <p className="journey__sub">KEEP IN TOUCH WITH OUR JOURNEY</p>
      <ul className="journey__list">
        {SOCIALS.map((s) => (
          <li key={s.name}>
            <img src={s.icon} alt={`${s.name} Icon`} />
            <a href={s.href} target={s.href === "#" ? undefined : "_blank"} rel="noreferrer">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="journey__copy">© {new Date().getFullYear()} Bimasakti Racing Team UGM</p>
    </footer>
  );
}
