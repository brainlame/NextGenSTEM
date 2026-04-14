/**
 * Central site configuration.
 *
 * One edit here swaps the production domain everywhere (sitemap, robots,
 * canonical tags, OG URLs, JSON-LD). Prefer referencing these constants over
 * hardcoding strings in pages or metadata.
 */

const DEFAULT_SITE_URL = "https://next-gen-stem.vercel.app";

const normalizeUrl = (value: string): string => value.replace(/\/+$/, "");

export const SITE_URL: string = normalizeUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL,
);

export const SITE_NAME = "NextGen STEM";

export const SITE_TAGLINE =
  "Accessible, High-Level STEM Mentorship";

export const SITE_DESCRIPTION =
  "NextGen STEM empowers students to reach their greatest potential in STEM through accessible, high-level mentorship for AMC, Science Olympiad, and USACO.";

export const SITE_LOCALE = "en_US";

/**
 * Organization phone contacts. Sourced from the current Contact component
 * so the JSON-LD stays in sync with what callers see on-screen.
 */
export type OrgContact = Readonly<{
  role: string;
  name: string;
  phone: string;
}>;

export const ORG_CONTACTS: readonly OrgContact[] = Object.freeze([
  { role: "CCO", name: "Arav Mathur", phone: "+1-216-375-2855" },
  { role: "COO", name: "Maanav Patel", phone: "+1-216-347-2458" },
  { role: "CSRO", name: "Ronit Arora", phone: "+1-917-930-8075" },
]);

/**
 * Primary org phone — first contact in the list. Exposed separately for
 * schema builders that only need a single telephone.
 */
export const ORG_PHONE: string = ORG_CONTACTS[0].phone;

/**
 * External partner / affiliation URLs that anchor the organization's
 * `sameAs` field for structured data.
 */
export const ORG_SAMEAS: readonly string[] = Object.freeze([
  "https://www.soinc.org/",
  "https://maa.org/",
  "https://usaco.org/",
]);

/**
 * Brand palette — locked. Referenced by OG image renderers so the dynamic
 * cards stay on-brand without importing Tailwind tokens.
 */
export const BRAND = Object.freeze({
  bg: "#0d0f14",
  text: "#eeeae0",
  gold: "#c9a84c",
  muted: "#7a8099",
  panel: "#13161e",
  border: "#1e2330",
});
