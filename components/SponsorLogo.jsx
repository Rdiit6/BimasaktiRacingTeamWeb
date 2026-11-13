import Pic from "./Pic";

// Satu logo sponsor; jadi link kalau sponsor punya website.
export default function SponsorLogo({ s, className, hidden = false }) {
  const img = <Pic src={s.logo} alt={hidden ? "" : s.name} sizes="(max-width: 760px) 240px, 460px" />;
  return s.href ? (
    <a href={s.href} className={className} target="_blank" rel="noreferrer" tabIndex={hidden ? -1 : undefined}>
      {img}
    </a>
  ) : (
    <div className={className}>{img}</div>
  );
}
