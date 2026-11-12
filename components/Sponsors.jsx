import fs from "fs";
import path from "path";
import { SPONSOR_TIERS, SPONSOR_LINKS } from "@/data/site";
import SponsorLogo from "./SponsorLogo";
import TierRow from "./TierRow";

const IMAGE_EXT = /\.(png|jpe?g|webp|svg|avif)$/i;

// Baca logo dari public/assets/sponsors/<tier>/, urut sesuai nama file.
function getSponsors(tier) {
  const dir = path.join(process.cwd(), "public/assets/sponsors", tier.toLowerCase());
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => IMAGE_EXT.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => {
      const key = file.replace(IMAGE_EXT, "");
      return {
        name: key.replace(/^\d+[-_ ]*/, "").replace(/[-_]+/g, " ").toUpperCase(),
        logo: `/assets/sponsors/${tier.toLowerCase()}/${encodeURIComponent(file)}`,
        href: SPONSOR_LINKS[key],
      };
    });
}

// compact (Home): tiap tier maksimal 1 baris; baris yang tidak muat berjalan ke kiri.
// Tanpa compact (halaman Sponsors): logo boleh turun ke beberapa baris.
export default function Sponsors({ compact = false }) {
  return (
    <section className="sponsors" id="sponsors">
      <h2 className="section-title">OUR SPONSORS</h2>
      <div className="sponsors__tiers">
        {SPONSOR_TIERS.map((tier) => {
          const sponsors = getSponsors(tier);
          return (
            <div className={`tier tier--${tier.toLowerCase()}`} key={tier}>
              <h3 className="tier__name">{tier}</h3>
              {compact && sponsors.length > 0 ? (
                <TierRow sponsors={sponsors} />
              ) : (
                <div className="tier__logos">
                  {sponsors.length === 0
                    ? Array.from({ length: tier === "EXCLUSIVE" ? 1 : 3 }).map((_, i) => (
                        <div className="tier__slot" key={i} aria-hidden="true" />
                      ))
                    : sponsors.map((s) => <SponsorLogo s={s} className="tier__logo" key={s.logo} />)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
