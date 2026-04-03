import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProgramsSection from "@/components/ProgramsSection";
import InfoSection from "@/components/InfoSection";
import PantheonSection from "@/components/PantheonSection";
import SlidesSection from "@/components/SlidesSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProgramsSection />
        <InfoSection
          label="OUR APPROACH"
          headline="Built for Schools, Not Tutoring Centers"
          body="Our programs are designed to plug into a school's existing infrastructure — no extra burden on teachers, no disruption to academics. We handle everything."
        />
        <InfoSection
          label="OUR IMPACT"
          headline="Results That Speak for Themselves"
          body="From national competitions to real-world outcomes, our students consistently outperform. We measure success not in hours logged, but in results achieved."
          reverse
        />
        <PantheonSection />
        <SlidesSection />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
