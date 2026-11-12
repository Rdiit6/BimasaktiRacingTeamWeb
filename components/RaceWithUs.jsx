import RollText from "./RollText";
import { CONTACT_URL } from "@/data/site";
import findImage from "@/lib/findImage";

// Gambar di atas Race With Us: public/assets/image/preContentSection/main.<format bebas>
export default function RaceWithUs({ showImage = true }) {
  const mainImage = showImage && findImage("assets/image/preContentSection", "main");
  return (
    <>
      {mainImage && (
        <div className="precontent">
          <img src={mainImage} alt="Main Image" loading="lazy" />
        </div>
      )}
      <section className="race">
        <span className="ghost" aria-hidden="true">Race</span>
        <h2 className="section-title">RACE WITH US</h2>
        <p className="race__text">
          WANT TO WRITE HISTORY WITH BIMASAKTI RACING TEAM? START YOUR PARTNERSHIP
          AND SPONSORSHIP JOURNEY WITH US!
        </p>
        <a href={CONTACT_URL} className="btn">
          <RollText text="CONTACT US" />
        </a>
      </section>
    </>
  );
}
