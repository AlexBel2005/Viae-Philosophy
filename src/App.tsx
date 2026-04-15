import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PhilosophieSection } from "@/components/PhilosophieSection";
import { MissionSection } from "@/components/MissionSection";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <PhilosophieSection />
        <MissionSection />
      </main>
      <Footer />
    </div>
  );
}
