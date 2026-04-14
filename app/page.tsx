import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProgramsSection from "@/components/ProgramsSection";
import InfoSection from "@/components/InfoSection";
import PantheonSection from "@/components/PantheonSection";
import SlidesSection from "@/components/SlidesSection";
import FAQSection from "@/components/FAQSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/config";
import { buildWebSite, serializeJsonLd } from "@/lib/jsonld";

const HOME_TITLE = `${SITE_NAME} \u2014 ${SITE_TAGLINE}`;

export function generateMetadata(): Metadata {
  return {
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: HOME_TITLE,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: HOME_TITLE,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: HOME_TITLE,
      description: SITE_DESCRIPTION,
      images: ["/twitter-image"],
    },
  };
}

const websiteJsonLd = buildWebSite({
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  searchUrlTemplate: `${SITE_URL}/?q={search_term_string}`,
});

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
          headline="Built by Competitors, For Competitors."
          body="Every mentor on our team has competed in the programs we teach. We don't just teach theory — we share the strategies, habits, and mindsets that helped us succeed at the national level."
          imageSrc="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=90&auto=format&fit=crop"
        />
        <InfoSection
          label="OUR MISSION"
          headline="Accessible Mentorship for Every Student."
          body="Our mission is to empower students to reach their greatest potential in STEM by providing accessible, high-level mentorship and experience to strive in competitive fields like AMC, Science Olympiad, and USACO."
          imageSrc="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=90&auto=format&fit=crop"
          reverse
        />
        <PantheonSection />
        <SlidesSection />
        <FAQSection />
        <Contact />
        <Footer />
      </main>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger -- typed JSON-LD payload, escaped by serializeJsonLd
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(websiteJsonLd) }}
      />
    </>
  );
}
