import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Sponsors from "@/components/Sponsors";
import RaceWithUs from "@/components/RaceWithUs";
import Journey from "@/components/Journey";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Story />
        {/* area putih: transisi hitam -> putih -> hitam */}
        <div className="light">
          <Sponsors compact />
          <RaceWithUs />
        </div>
      </main>
      <Journey />
    </>
  );
}
