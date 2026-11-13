import path from "path";
import Pic from "./Pic";
import RollText from "./RollText";
import { CONTACT_URL } from "@/data/site";
import findImage from "@/lib/findImage";
import imageRatio from "@/lib/imageRatio";

// Gambar di atas Race With Us: public/assets/image/preContentSection/main.<format bebas>
export default function RaceWithUs({ showImage = true }) {
  const mainImage = showImage && findImage("assets/image/preContentSection", "main");
  // rasio asli gambar, supaya kotaknya pas tanpa crop
  const ratio = mainImage
    ? imageRatio(path.join(process.cwd(), "public", decodeURIComponent(mainImage.split("?")[0]))) || 16 / 9
    : 1;
  return (
    <>
      {mainImage && (
        <div className="precontent" style={{ aspectRatio: ratio }}>
          <Pic src={mainImage} alt="Main Image" sizes="(max-width: 900px) 100vw, 860px" />
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
