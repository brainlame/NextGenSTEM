"use client";

import { useState } from "react";
import { officers } from "@/data/officers";
import { buildObfuscatedMailtoHTML } from "@/lib/email";

function ObfuscatedEmailLink({ email }: { email: string }) {
  const html = buildObfuscatedMailtoHTML(
    email,
    "font-serif text-base text-[#eeeae0] hover:text-[#c9a84c] transition-colors duration-200 break-all"
  );
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

function ContactCard({
  name,
  role,
  email,
  phone,
}: {
  name: string;
  role: string;
  email: string;
  phone: string;
}) {
  const [copied, setCopied] = useState(false);
  const digits = phone.replace(/[^0-9]/g, "");

  const handleCopy = () => {
    navigator.clipboard.writeText(digits);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#13161e] border border-[#1e2330] hover:border-[#c9a84c]/30 px-6 py-8 rounded-sm transition-all duration-300 hover:shadow-[0_0_50px_rgba(201,168,76,0.15)] flex flex-col gap-5">
      <div>
        <p className="text-xs uppercase tracking-widest text-[#7a8099]">
          {role}
        </p>
        <p className="font-serif text-xl text-[#eeeae0] mt-1">{name}</p>
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a84c] mb-1">
          Email
        </p>
        <ObfuscatedEmailLink email={email} />
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#7a8099] mb-1">
          Phone
        </p>
        <a
          href={`tel:${digits}`}
          className="font-serif text-base text-[#eeeae0] hover:text-[#c9a84c] transition-colors duration-200 block"
        >
          {phone}
        </a>
        <button
          onClick={handleCopy}
          className="mt-3 flex items-center gap-2 text-xs uppercase tracking-widest px-3 py-1.5 border rounded-sm transition-all duration-200 border-[#1e2330] hover:border-[#c9a84c]/40 text-[#7a8099] hover:text-[#c9a84c]"
        >
          <span>{copied ? "\u2713 COPIED" : "\u29C9 COPY NUMBER"}</span>
        </button>
      </div>
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
        <p className="text-[#7a8099] text-sm leading-relaxed mt-4 max-w-lg">
          Email is the fastest way to reach us. Phone lines are open for urgent
          questions during program hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {officers.map((o) => (
            <ContactCard
              key={o.slug}
              name={o.name}
              role={`${o.shortRole} \u2014 ${o.role}`}
              email={o.email}
              phone={o.phone}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
