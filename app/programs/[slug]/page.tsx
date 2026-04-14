import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROGRAMS, findProgram } from "@/data/programs";
import { SITE_NAME, SITE_URL } from "@/lib/config";
import { buildCourse, serializeJsonLd } from "@/lib/jsonld";

type RouteParams = { slug: string };

export function generateStaticParams(): RouteParams[] {
  return PROGRAMS.map((p) => ({ slug: p.slug }));
}

type PageProps = { params: Promise<RouteParams> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = findProgram(slug);
  if (!program) return {};

  const title = program.title;
  const description = program.summary;
  const url = `${SITE_URL}/programs/${program.slug}`;

  return {
    title,
    description,
    alternates: { canonical: `/programs/${program.slug}` },
    openGraph: {
      type: "article",
      siteName: SITE_NAME,
      title: `${title} \u00b7 ${SITE_NAME}`,
      description,
      url,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${title} \u2014 ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} \u00b7 ${SITE_NAME}`,
      description,
      images: ["/twitter-image"],
    },
  };
}

export default async function ProgramPage({ params }: PageProps) {
  const { slug } = await params;
  const program = findProgram(slug);
  if (!program) notFound();

  const courseJsonLd = buildCourse({
    name: program.title,
    url: `${SITE_URL}/programs/${program.slug}`,
    description: program.summary,
    provider: { name: SITE_NAME, url: SITE_URL },
    educationalLevel: "High school",
    audienceType: "student",
    teaches: program.teaches,
    competencyRequired: program.competencyRequired,
  });

  return (
    <>
      <Navbar />
      <main>
        <article className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
          <Link
            href="/#programs"
            className="text-xs uppercase tracking-widest text-[#7a8099] hover:text-[#c9a84c] transition-colors duration-200"
          >
            &larr; All Programs
          </Link>
          <p className="text-xs tracking-[0.2em] uppercase text-[#c9a84c] mt-8 mb-3">
            {program.label}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#eeeae0] mb-3">
            {program.title}
          </h1>
          <p className="text-[#c9a84c] text-sm italic mb-8">
            {program.tagline}
          </p>
          <p className="text-[#eeeae0]/90 text-base leading-relaxed mb-10">
            {program.summary}
          </p>

          {program.sections.map((section) => (
            <section key={section.heading} className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-[#eeeae0] mb-3">
                {section.heading}
              </h2>
              <p className="text-[#7a8099] text-sm leading-relaxed">
                {section.body}
              </p>
            </section>
          ))}

          <section className="border-t border-[#1e2330] pt-8 mb-10">
            <p className="text-xs uppercase tracking-widest text-[#7a8099] mb-3">
              What you will learn
            </p>
            <ul className="space-y-1 list-disc list-inside">
              {program.teaches.map((t) => (
                <li key={t} className="text-sm text-[#eeeae0]/80">
                  {t}
                </li>
              ))}
            </ul>
          </section>

          <Link
            href="/#contact"
            className="inline-block border border-[#c9a84c] text-[#c9a84c] text-xs tracking-widest uppercase px-6 py-3 hover:bg-[#c9a84c]/10 transition-colors duration-200"
          >
            Get in touch &rarr;
          </Link>
        </article>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger -- typed JSON-LD payload, escaped by serializeJsonLd
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(courseJsonLd) }}
      />
    </>
  );
}
