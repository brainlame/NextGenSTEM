import { notFound } from "next/navigation";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/og";
import { TEAM, findTeamMember, formatSpecializations } from "@/data/team";

export const alt = "NextGen STEM coach";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return TEAM.map((m) => ({ slug: m.slug }));
}

export default async function TeamMemberOgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = findTeamMember(slug);
  if (!member) notFound();

  return renderOgCard({
    eyebrow: member.role,
    title: member.name,
    subtitle: `${member.school} \u00b7 Coaching at NextGen STEM`,
    badge: formatSpecializations(member.specializations),
  });
}
