import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
<<<<<<< HEAD
import { HeroSection } from "@/components/HeroSection";
import { PhilosophieSection } from "@/components/PhilosophieSection";
import { MissionSection } from "@/components/MissionSection";
import { Footer } from "@/components/Footer";
=======
import { HeroSection } from "../components/HeroSection";
import { PhilosophieSection } from "../components/PhilosophieSection";
import { MissionSection } from "../components/MissionSection";
import { Footer } from "../components/Footer";
>>>>>>> ef7e60aa4e7bddfbfdcdfb10a8cca282dabb38c2

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
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
