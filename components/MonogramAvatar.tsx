type Props = {
  initials: string;
  className?: string;
  size?: "card" | "teaser";
};

export default function MonogramAvatar({
  initials,
  className = "",
  size = "card",
}: Props) {
  const fontSize = size === "teaser" ? 64 : 96;
  return (
    <div
      className={`bg-[#1a1e2a] flex items-center justify-center ${className}`}
      role="img"
      aria-label={`${initials} placeholder portrait`}
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#c9a84c"
          fontFamily="var(--font-playfair), Georgia, serif"
          fontStyle="italic"
          fontWeight="600"
          fontSize={fontSize}
          letterSpacing="-2"
        >
          {initials}
        </text>
      </svg>
    </div>
  );
}
