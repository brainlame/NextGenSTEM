import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamMemberCard from "./_components/TeamMemberCard";
import { TEAM } from "@/data/team";
import {
  ORG_SAMEAS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/config";
import {
  buildOrganizationWithMembers,
  serializeJsonLd,
} from "@/lib/jsonld";

const TEAM_TITLE = "Meet the Team";
const TEAM_DESCRIPTION =
  "NextGen STEM was founded by students with firsthand competition experience in AMC, Science Olympiad, and USACO. Meet the coaches behind the mentorship.";

export function generateMetadata(): Metadata {
  return {
    title: TEAM_TITLE,
    description: TEAM_DESCRIPTION,
    alternates: { canonical: "/team" },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: `${TEAM_TITLE} \u00b7 ${SITE_NAME}`,
      description: TEAM_DESCRIPTION,
      url: `${SITE_URL}/team`,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${TEAM_TITLE} \u2014 ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${TEAM_TITLE} \u00b7 ${SITE_NAME}`,
      description: TEAM_DESCRIPTION,
      images: ["/twitter-image"],
    },
  };
}

const teamJsonLd = buildOrganizationWithMembers({
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/opengraph-image`,
  description: SITE_DESCRIPTION,
  sameAs: ORG_SAMEAS,
  members: TEAM.map((m) => ({
    name: m.name,
    jobTitle: m.role,
    url: `${SITE_URL}/team/${m.slug}`,
  })),
});

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#c9a84c] mb-3">
            OUR TEAM
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#eeeae0] mb-4">
            Meet the Founders
          </h1>
          <p className="text-[#7a8099] text-sm max-w-xl leading-relaxed mb-16">
            NextGen STEM was founded by three students at Western Reserve
            Academy who believe every student deserves access to the kind of
            mentorship that drives real results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {TEAM.map((member) => (
              <TeamMemberCard key={member.slug} member={member} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger -- typed JSON-LD payload, escaped by serializeJsonLd
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(teamJsonLd) }}
      />
    </>
  );
}
