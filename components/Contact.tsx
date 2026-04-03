export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[#1e2330] py-28 md:py-36 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-[#c9a84c]">
          Get in Touch
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#eeeae0] mt-3">
          Let&apos;s Work Together
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <a
            href="#"
            className="bg-[#13161e] border border-[#1e2330] px-6 py-8 rounded-sm hover:border-[#c9a84c] transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.06)] block"
          >
            <p className="text-xs uppercase tracking-widest text-[#7a8099]">
              Instagram
            </p>
            <p className="text-[#eeeae0] font-serif text-xl mt-2">
              @orghandle
            </p>
          </a>

          <a
            href="mailto:hello@example.com"
            className="bg-[#13161e] border border-[#1e2330] px-6 py-8 rounded-sm hover:border-[#c9a84c] transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.06)] block"
          >
            <p className="text-xs uppercase tracking-widest text-[#7a8099]">
              Email
            </p>
            <p className="text-[#eeeae0] font-serif text-xl mt-2">
              hello@example.com
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
