import Sponsors from "@/components/Sponsors";
import RaceWithUs from "@/components/RaceWithUs";
import Journey from "@/components/Journey";

export const metadata = { title: "Sponsors | Bimasakti Racing Team" };

// Sama seperti bagian bawah Home: area putih berisi sponsor + ajakan partnership.
export default function SponsorsPage() {
  return (
    <>
      <main className="light light--page">
        <Sponsors />
        <RaceWithUs showImage={false} />
      </main>
      <Journey />
    </>
  );
}
