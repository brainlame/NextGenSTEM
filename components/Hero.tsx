import { Button } from "@/components/ui/button";

// Inline noise SVG as data URL (monochrome, low opacity). Pure CSS/SVG, no JS.
const NOISE_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'>
       <filter id='n'>
         <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>
         <feColorMatrix values='0 0 0 0 0.93  0 0 0 0 0.92  0 0 0 0 0.88  0 0 0 0.08 0'/>
       </filter>
       <rect width='100%' height='100%' filter='url(#n)'/>
     </svg>`
  );

function LaurelAtomMark() {
  // Editorial mark: an atom glyph cradled by a half laurel. Pure SVG.
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      className="h-16 w-16 text-[#c9a84c]/80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    >
      {/* Laurel (left) */}
      <path d="M24 92 C 10 70, 14 44, 36 24" />
      <path d="M22 78 c -4 -2 -6 -6 -4 -10" />
      <path d="M20 66 c -4 -2 -6 -6 -4 -10" />
      <path d="M20 54 c -4 -2 -6 -6 -4 -10" />
      <path d="M24 44 c -4 -2 -6 -6 -4 -10" />
      <path d="M32 34 c -4 -2 -6 -6 -4 -10" />
      {/* Laurel (right) */}
      <path d="M96 92 C 110 70, 106 44, 84 24" />
      <path d="M98 78 c 4 -2 6 -6 4 -10" />
      <path d="M100 66 c 4 -2 6 -6 4 -10" />
      <path d="M100 54 c 4 -2 6 -6 4 -10" />
      <path d="M96 44 c 4 -2 6 -6 4 -10" />
      <path d="M88 34 c 4 -2 6 -6 4 -10" />
      {/* Atom */}
      <circle cx="60" cy="60" r="3" fill="currentColor" />
      <ellipse cx="60" cy="60" rx="22" ry="8" />
      <ellipse
        cx="60"
        cy="60"
        rx="22"
        ry="8"
        transform="rotate(60 60 60)"
      />
      <ellipse
        cx="60"
        cy="60"
        rx="22"
        ry="8"
        transform="rotate(120 60 60)"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden min-h-screen flex items-center px-6 pt-24 md:pt-0"
      style={{ backgroundColor: "#0d0f14" }}
    >
      {/* Atmosphere: dim gold radial wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(200, 170, 90, 0.08) 0%, rgba(200, 170, 90, 0.02) 40%, rgba(13, 15, 20, 0) 70%)",
        }}
      />
      {/* Atmosphere: fine grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 mix-blend-overlay"
        style={{
          backgroundImage: `url("${NOISE_SVG}")`,
          backgroundSize: "160px 160px",
        }}
      />
      {/* Hairline bottom rule */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px -z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(201,168,76,0) 0%, rgba(201,168,76,0.25) 50%, rgba(201,168,76,0) 100%)",
        }}
      />

      <div className="mx-auto w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center py-20 md:py-0">
        {/* Left: primary content (7/12) */}
        <div className="md:col-span-7 hero-enter">
          <p className="text-[11px] md:text-xs tracking-[0.28em] uppercase text-[#c9a84c]">
            <span className="inline-block align-middle mr-3 h-px w-8 bg-[#c9a84c]/60" />
            Trusted · Proven · Student-Led
          </p>

          <h1
            id="hero-title"
            className="font-serif text-5xl md:text-7xl text-[#eeeae0] leading-[1.02] mt-6 tracking-tight"
          >
            Empowering the Next Generation
            <br />
            <span className="italic text-[#eeeae0]">of STEM Leaders.</span>
          </h1>

          <p className="text-base md:text-lg text-[#a9b0c3] max-w-xl mt-6 leading-relaxed">
            Accessible, competition-grade mentorship from students who have
            already won at the national level — AMC / AIME, Science Olympiad,
            and USACO.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button
              asChild
              className="h-11 px-6 text-xs tracking-[0.22em] uppercase rounded-none bg-[#c9a84c] text-[#0d0f14] hover:bg-[#d8b961] border-[#c9a84c]"
            >
              <a href="/#contact">Get Started</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 px-6 text-xs tracking-[0.22em] uppercase rounded-none border-[#c9a84c]/60 bg-transparent text-[#c9a84c] hover:bg-[#c9a84c]/10 hover:text-[#eeeae0] dark:bg-transparent dark:border-[#c9a84c]/60 dark:hover:bg-[#c9a84c]/10"
            >
              <a href="/#about">Learn More</a>
            </Button>
          </div>
        </div>

        {/* Right: meta block (5/12) */}
        <aside
          aria-label="Organization meta"
          className="md:col-span-5 md:pl-6 md:border-l md:border-[#c9a84c]/20"
        >
          <div className="flex md:flex-col items-center md:items-start gap-5 md:gap-6">
            <LaurelAtomMark />
            <div className="font-serif italic text-[#eeeae0]/90 leading-snug">
              <p className="text-[11px] not-italic font-sans tracking-[0.28em] uppercase text-[#c9a84c]/80 mb-3">
                The Record
              </p>
              <p className="text-xl md:text-2xl">
                <span className="block">Est. 2024</span>
                <span className="block text-[#a9b0c3] text-lg md:text-xl">
                  Student-Led
                </span>
                <span className="block text-[#a9b0c3] text-lg md:text-xl">
                  Competition-Proven
                </span>
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* Respect reduced motion */}
      <style>{`
        .hero-enter {
          opacity: 0;
          transform: translateY(8px);
          animation: heroFadeIn 700ms ease-out 80ms forwards;
        }
        @keyframes heroFadeIn {
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-enter {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
