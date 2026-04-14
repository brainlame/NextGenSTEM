export default function Footer() {
  return (
    <footer className="border-t border-[#1e2330] py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-serif font-semibold text-[#eeeae0]">
              NextGen STEM
            </p>
            <p className="text-xs text-[#7a8099] mt-1">
              Student-led STEM mentorship for the next generation.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/#hero"
              className="text-xs uppercase tracking-widest text-[#7a8099] hover:text-[#eeeae0] transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="/#about"
              className="text-xs uppercase tracking-widest text-[#7a8099] hover:text-[#eeeae0] transition-colors duration-200"
            >
              About
            </a>
            <a
              href="/#programs"
              className="text-xs uppercase tracking-widest text-[#7a8099] hover:text-[#eeeae0] transition-colors duration-200"
            >
              Programs
            </a>
            <a
              href="/#contact"
              className="text-xs uppercase tracking-widest text-[#7a8099] hover:text-[#eeeae0] transition-colors duration-200"
            >
              Contact
            </a>
            <a
              href="/team"
              className="text-xs uppercase tracking-widest text-[#7a8099] hover:text-[#eeeae0] transition-colors duration-200"
            >
              Team
            </a>
          </div>
        </div>

        <p className="text-xs text-[#7a8099] mt-6 border-t border-[#1e2330] pt-6">
          &copy; 2026 NextGen STEM. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
