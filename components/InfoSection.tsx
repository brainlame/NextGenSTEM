interface InfoSectionProps {
  label: string;
  headline: string;
  body: string;
  reverse?: boolean;
  imageSrc?: string;
}

export default function InfoSection({
  label,
  headline,
  body,
  reverse,
  imageSrc,
}: InfoSectionProps) {
  return (
    <section className="border-t border-[#1e2330] py-20 md:py-28 px-6">
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
          className={`overflow-hidden h-80 w-full ${
            reverse ? "md:order-1" : ""
          }`}
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={headline}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
          ) : (
            <div className="bg-[#1a1e2a] border border-[#2a3040] h-full w-full" />
          )}
        </div>
      </div>
    </section>
  );
}
