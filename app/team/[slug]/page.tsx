import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  TEAM,
  findTeamMember,
  formatSpecializations,
} from "@/data/team";
import { SITE_NAME, SITE_URL } from "@/lib/config";
import { buildPerson, serializeJsonLd } from "@/lib/jsonld";

type RouteParams = { slug: string };

export function generateStaticParams(): RouteParams[] {
  return TEAM.map((m) => ({ slug: m.slug }));
}

type PageProps = { params: Promise<RouteParams> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = findTeamMember(slug);
  if (!member) return {};

  const title = `${member.name} \u2014 ${member.role}`;
  const description = `${member.name}, ${member.role} at ${SITE_NAME}. Specialization: ${formatSpecializations(
    member.specializations,
  )}.`;
  const url = `${SITE_URL}/team/${member.slug}`;

  return {
    title,
    description,
    alternates: { canonical: `/team/${member.slug}` },
    openGraph: {
      type: "profile",
      siteName: SITE_NAME,
      title: `${title} \u00b7 ${SITE_NAME}`,
      description,
      url,
      images: [
        {
          url: `/team/${member.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${member.name} \u2014 ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} \u00b7 ${SITE_NAME}`,
      description,
      images: [`/team/${member.slug}/opengraph-image`],
    },
  };
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params;
  const member = findTeamMember(slug);
  if (!member) notFound();

  const personJsonLd = buildPerson({
    name: member.name,
    url: `${SITE_URL}/team/${member.slug}`,
    jobTitle: member.role,
    description: member.bio,
    image: member.image ? `${SITE_URL}${member.image}` : undefined,
    worksFor: { name: SITE_NAME, url: SITE_URL },
    memberOf: [
      { name: member.school },
      ...member.competitions.map((c) => ({ name: c.name, url: c.url })),
    ],
    knowsAbout: member.specializations.map((s) =>
      s === "ScienceOlympiad" ? "Science Olympiad" : s,
    ),
  });

  return (
    <>
      <Navbar />
      <main>
        <article className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
          <Link
            href="/team"
            className="text-xs uppercase tracking-widest text-[#7a8099] hover:text-[#c9a84c] transition-colors duration-200"
          >
            &larr; Back to Team
          </Link>
          <p className="text-xs tracking-[0.2em] uppercase text-[#c9a84c] mt-8 mb-3">
            {formatSpecializations(member.specializations)}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#eeeae0] mb-3">
            {member.name}
          </h1>
          <p className="text-[#7a8099] text-sm uppercase tracking-widest mb-8">
            {member.role} &middot; {member.school}
          </p>
          <p className="text-[#eeeae0]/90 text-base leading-relaxed mb-10">
            {member.bio}
          </p>
          <div className="border-t border-[#1e2330] pt-8">
            <p className="text-xs uppercase tracking-widest text-[#7a8099] mb-3">
              Competitions
            </p>
            <ul className="space-y-1">
              {member.competitions.map((c) => (
                <li key={c.name} className="text-sm text-[#eeeae0]/80">
                  {c.url ? (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#c9a84c] transition-colors duration-200"
                    >
                      {c.name}
                    </a>
                  ) : (
                    c.name
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12">
            <Link
              href="/#contact"
              className="inline-block border border-[#c9a84c] text-[#c9a84c] text-xs tracking-widest uppercase px-6 py-3 hover:bg-[#c9a84c]/10 transition-colors duration-200"
            >
              Get in touch &rarr;
            </Link>
          </div>
        </article>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger -- typed JSON-LD payload, escaped by serializeJsonLd
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(personJsonLd) }}
      />
    </>
  );
}
