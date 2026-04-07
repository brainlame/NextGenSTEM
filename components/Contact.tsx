"use client";

import { useState } from "react";

const contacts = [
  { role: "CCO \u2014 Arav Mathur", phone: "216-375-2855" },
  { role: "COO \u2014 Maanav Patel", phone: "216-347-2458" },
  { role: "CSRO \u2014 Ronit Arora", phone: "917-930-8075" },
];

function ContactCard({ role, phone }: { role: string; phone: string }) {
  const [copied, setCopied] = useState(false);
  const digits = phone.replace(/[^0-9]/g, "");

  const handleCopy = () => {
    navigator.clipboard.writeText(digits);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#13161e] border border-[#1e2330] hover:border-[#c9a84c]/30 px-6 py-8 rounded-sm transition-all duration-300 hover:shadow-[0_0_50px_rgba(201,168,76,0.15)]">
      <p className="text-xs uppercase tracking-widest text-[#7a8099]">
        {role}
      </p>
      <a
        href={`tel:${digits}`}
        className="font-serif text-xl text-[#eeeae0] mt-2 mb-4 block hover:text-[#c9a84c] transition-colors duration-200"
      >
        {phone}
      </a>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-xs uppercase tracking-widest px-3 py-1.5 border rounded-sm transition-all duration-200 border-[#1e2330] hover:border-[#c9a84c]/40 text-[#7a8099] hover:text-[#c9a84c]"
      >
        <span>{copied ? "\u2713 COPIED" : "\u29C9 COPY"}</span>
      </button>
    </div>
  );
}

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
          Reach Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {contacts.map((c) => (
            <ContactCard key={c.role} role={c.role} phone={c.phone} />
          ))}
        </div>
      </div>
    </section>
  );
}
