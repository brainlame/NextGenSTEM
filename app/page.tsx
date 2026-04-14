import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import StatsBlock from "@/components/StatsBlock";
import About from "@/components/About";
import ProgramsSection from "@/components/ProgramsSection";
import RankingsProof from "@/components/RankingsProof";
import TeamSection from "@/components/TeamSection";
import PantheonSection from "@/components/PantheonSection";
import SlidesSection from "@/components/SlidesSection";
import FAQSection from "@/components/FAQSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <StatsBlock />
        <About />
        <ProgramsSection />
        <RankingsProof />
        <TeamSection />
        <PantheonSection />
        <SlidesSection />
        <FAQSection />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
