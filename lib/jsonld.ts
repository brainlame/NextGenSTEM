/**
 * Typed JSON-LD helpers.
 *
 * Each builder returns a plain object whose `@type` is constrained by a
 * literal string, so malformed schemas fail at build time rather than at
 * Google's rich-results validator. Keep these small and focused — one
 * helper per schema.org type we actually ship.
 */

type JsonLd<T extends string> = {
  "@context": "https://schema.org";
  "@type": T;
} & Record<string, unknown>;

type ContactPoint = JsonLd<"ContactPoint">;

type PostalAddress = JsonLd<"PostalAddress">;

export type EducationalOrganization = JsonLd<"EducationalOrganization">;

export type WebSite = JsonLd<"WebSite">;

export type Organization = JsonLd<"Organization">;

export type Person = JsonLd<"Person">;

export type Course = JsonLd<"Course">;

type BuildEducationalOrgInput = Readonly<{
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs: readonly string[];
  contacts: readonly Readonly<{
    role: string;
    name: string;
    phone: string;
  }>[];
  address?: PostalAddress;
}>;

export function buildEducationalOrganization(
  input: BuildEducationalOrgInput,
): EducationalOrganization {
  const contactPoints: ContactPoint[] = input.contacts.map((c) => ({
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    contactType: c.role,
    name: c.name,
    telephone: c.phone,
    areaServed: "US",
    availableLanguage: ["en"],
  }));

  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: input.name,
    url: input.url,
    logo: input.logo,
    description: input.description,
    sameAs: [...input.sameAs],
    contactPoint: contactPoints,
    ...(input.address ? { address: input.address } : {}),
  };
}

type BuildWebSiteInput = Readonly<{
  name: string;
  url: string;
  description: string;
  searchUrlTemplate?: string;
}>;

export function buildWebSite(input: BuildWebSiteInput): WebSite {
  const base: WebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: input.name,
    url: input.url,
    description: input.description,
  };

  if (!input.searchUrlTemplate) return base;

  return {
    ...base,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: input.searchUrlTemplate,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

type MemberRef = Readonly<{
  name: string;
  url?: string;
  jobTitle?: string;
}>;

type BuildOrganizationInput = Readonly<{
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs: readonly string[];
  members: readonly MemberRef[];
}>;

export function buildOrganizationWithMembers(
  input: BuildOrganizationInput,
): Organization {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: input.name,
    url: input.url,
    logo: input.logo,
    description: input.description,
    sameAs: [...input.sameAs],
    member: input.members.map((m) => ({
      "@type": "Person",
      name: m.name,
      ...(m.jobTitle ? { jobTitle: m.jobTitle } : {}),
      ...(m.url ? { url: m.url } : {}),
    })),
  };
}

type BuildPersonInput = Readonly<{
  name: string;
  url: string;
  jobTitle: string;
  description: string;
  image?: string;
  worksFor: Readonly<{ name: string; url: string }>;
  memberOf?: readonly Readonly<{ name: string; url?: string }>[];
  knowsAbout?: readonly string[];
}>;

export function buildPerson(input: BuildPersonInput): Person {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: input.name,
    url: input.url,
    jobTitle: input.jobTitle,
    description: input.description,
    ...(input.image ? { image: input.image } : {}),
    worksFor: {
      "@type": "EducationalOrganization",
      name: input.worksFor.name,
      url: input.worksFor.url,
    },
    ...(input.memberOf && input.memberOf.length
      ? {
          memberOf: input.memberOf.map((m) => ({
            "@type": "Organization",
            name: m.name,
            ...(m.url ? { url: m.url } : {}),
          })),
        }
      : {}),
    ...(input.knowsAbout && input.knowsAbout.length
      ? { knowsAbout: [...input.knowsAbout] }
      : {}),
  };
}

type BuildCourseInput = Readonly<{
  name: string;
  url: string;
  description: string;
  provider: Readonly<{ name: string; url: string }>;
  educationalLevel?: string;
  audienceType?: string;
  competencyRequired?: readonly string[];
  teaches?: readonly string[];
}>;

export function buildCourse(input: BuildCourseInput): Course {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: input.name,
    url: input.url,
    description: input.description,
    provider: {
      "@type": "EducationalOrganization",
      name: input.provider.name,
      url: input.provider.url,
      sameAs: input.provider.url,
    },
    ...(input.educationalLevel
      ? { educationalLevel: input.educationalLevel }
      : {}),
    ...(input.audienceType
      ? {
          audience: {
            "@type": "EducationalAudience",
            educationalRole: input.audienceType,
          },
        }
      : {}),
    ...(input.teaches && input.teaches.length
      ? { teaches: [...input.teaches] }
      : {}),
    ...(input.competencyRequired && input.competencyRequired.length
      ? { competencyRequired: [...input.competencyRequired] }
      : {}),
  };
}

/**
 * Serializes a JSON-LD object into a string safe to embed inside a
 * `<script type="application/ld+json">` tag. Escapes the closing `</`
 * sequence so the payload cannot terminate the script element.
 */
export function serializeJsonLd(value: object): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
