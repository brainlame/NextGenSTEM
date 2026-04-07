"use client";

import { useState } from "react";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border rounded-sm transition-all duration-300 hover:shadow-[0_0_50px_rgba(201,168,76,0.15)] hover:border-[#c9a84c]/30 ${
        open
          ? "bg-[#161a24] border-[#c9a84c]/20"
          : "bg-[#13161e] border-[#1e2330]"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="text-[#eeeae0] text-sm font-medium pr-8">
          {question}
        </span>
        <span className="text-[#c9a84c] text-xl flex-shrink-0 leading-none">
          {open ? "\u2212" : "+"}
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "500px" : "0px", opacity: open ? 1 : 0 }}
      >
        <div className="px-6 pb-5">
          <p className="text-[#7a8099] text-sm leading-relaxed border-l-2 border-[#c9a84c] pl-4">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "What competitions do you prepare students for?",
    answer:
      "We specialize in three core competitive STEM programs: AMC (AMC 8, AMC 10, AMC 12, and AIME), Science Olympiad (regional through national level), and USACO (Bronze through Platinum divisions). Our mentors have competed and placed at the highest levels of each.",
  },
  {
    question: "How is NextGen STEM different from a regular tutor?",
    answer:
      "Our mentors aren\u2019t just teachers \u2014 they\u2019re competitors who have won at the regional, state, and national level. We don\u2019t just teach content; we provide structured weekly sessions, competition strategy, and the mindset that separates top performers from the rest.",
  },
  {
    question: "Why is expert coaching important for these competitions?",
    answer:
      "Highly rated competition coaches charge exorbitant rates, making elite preparation inaccessible for most students. Without structured guidance, students either rely on overwhelmed teachers with no competitive experience or try to self-teach \u2014 both paths lead to missed opportunities. NextGen STEM closes that gap.",
  },
  {
    question: "What does a typical program look like?",
    answer:
      "We offer structured weekly sessions with extensive resources developed by students who have competed and taught at the national level. Sessions cover core concepts, problem-solving strategy, past competition review, and personalized feedback. We also handle all logistics \u2014 registration roadmaps, study plans, and competition prep timelines.",
  },
  {
    question: "Who are the mentors?",
    answer:
      "NextGen STEM was founded by three students at Western Reserve Academy \u2014 Maanav Patel (national Science Olympiad team captain), Arav Mathur (WRA Chess Team president and founder), and Ronit Arora (multi-state Math Field Day champion). Each mentor brings firsthand competitive experience in the programs they teach.",
  },
  {
    question: "How do I get started?",
    answer:
      "Reach out directly to any of our team members via the contact section below. We\u2019ll schedule a free consultation to understand your goals and match you with the right program.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-28 md:py-36 px-6 border-t border-[#1e2330]"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-[#c9a84c] mb-3">
          COMMON QUESTIONS
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#eeeae0] mb-4">
          Working with NextGen STEM
        </h2>
        <p className="text-[#7a8099] text-sm max-w-xl leading-relaxed mb-12">
          Everything you need to know about our programs and how we work with
          students.
        </p>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
