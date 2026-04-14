import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Faq = { q: string; a: string };

const FAQS: readonly Faq[] = [
  {
    q: "What competitions do you prepare students for?",
    a: "We specialize in three core competitive STEM programs: AMC (AMC 8, AMC 10, AMC 12, and AIME), Science Olympiad (regional through national level), and USACO (Bronze through Platinum divisions). Our mentors have competed and placed at the highest levels of each.",
  },
  {
    q: "How is NextGen STEM different from a regular tutor?",
    a: "Our mentors aren\u2019t just teachers \u2014 they\u2019re competitors who have won at the regional, state, and national level. We don\u2019t just teach content; we provide structured weekly sessions, competition strategy, and the mindset that separates top performers from the rest.",
  },
  {
    q: "Why is expert coaching important for these competitions?",
    a: "Highly rated competition coaches charge exorbitant rates, making elite preparation inaccessible for most students. Without structured guidance, students either rely on overwhelmed teachers with no competitive experience or try to self-teach \u2014 both paths lead to missed opportunities. NextGen STEM closes that gap.",
  },
  {
    q: "What does a typical program look like?",
    a: "We offer structured weekly sessions with extensive resources developed by students who have competed and taught at the national level. Sessions cover core concepts, problem-solving strategy, past competition review, and personalized feedback. We also handle all logistics \u2014 registration roadmaps, study plans, and competition prep timelines.",
  },
  {
    q: "Who are the mentors?",
    a: "NextGen STEM was founded by three students at Western Reserve Academy \u2014 Maanav Patel (national Science Olympiad team captain), Arav Mathur (WRA Chess Team president and founder), and Ronit Arora (multi-state Math Field Day champion). Each mentor brings firsthand competitive experience in the programs they teach.",
  },
  {
    q: "How do I get started?",
    a: "Reach out directly to any of our team members via the contact section below. We\u2019ll schedule a free consultation to understand your goals and match you with the right program.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-28 md:py-36 px-6 border-t border-[#1e2330]">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-[#c9a84c] mb-3">
          Common Questions
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#eeeae0] mb-4">
          Working with NextGen STEM
        </h2>
        <p className="text-[#7a8099] text-sm max-w-xl leading-relaxed mb-10">
          Everything you need to know about our programs and how we work with
          students.
        </p>

        <Accordion
          type="single"
          defaultValue="item-1"
          collapsible
          className="border-t border-[#1e2330]"
        >
          {FAQS.map((faq, i) => {
            const value = `item-${i + 1}`;
            return (
              <AccordionItem
                key={value}
                value={value}
                className="border-b border-[#1e2330]"
              >
                <AccordionTrigger className="text-[#eeeae0] hover:no-underline data-[state=open]:text-[#c9a84c] py-5 text-sm md:text-base font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#a9b0c3] text-sm leading-relaxed border-l-2 border-[#c9a84c] pl-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
