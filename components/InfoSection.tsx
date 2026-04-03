interface InfoSectionProps {
  label: string;
  headline: string;
  body: string;
  reverse?: boolean;
}

export default function InfoSection({
  label,
  headline,
  body,
  reverse,
}: InfoSectionProps) {
  return (
    <section className="border-t border-[#1e2330] py-28 md:py-36 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className={reverse ? "md:order-2" : ""}>
          <p className="text-xs tracking-[0.2em] uppercase text-[#c9a84c]">
            {label}
          </p>
          <h2 className="font-serif text-3xl font-bold text-[#eeeae0] mt-3">
            {headline}
          </h2>
          <p className="text-[#7a8099] text-sm leading-relaxed mt-4">{body}</p>
        </div>
        <div
          className={`bg-[#1a1e2a] border border-[#2a3040] rounded-sm h-64 w-full ${
            reverse ? "md:order-1" : ""
          }`}
        />
      </div>
    </section>
  );
}
