import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/config";

export const alt = `${SITE_NAME} \u2014 ${SITE_TAGLINE}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpenGraphImage() {
  return renderOgCard({
    title: SITE_NAME,
    subtitle: SITE_TAGLINE,
    eyebrow: "Mentorship for AMC \u00b7 Science Olympiad \u00b7 USACO",
  });
}
