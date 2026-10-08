import { useState } from "react";

const faqData = [
  {
    question: "How does the studio engagement model work?",
    answer:
      "We operate through two focused models: 4-to-6 week high-impact Strategic Sprints (for brand launches, rebrands, and 0-to-1 product designs) and quarterly Dedicated Studio Retainers (for ongoing product iteration and growth). We embed directly with your founders and engineers without bureaucratic layers.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "A focused brand architecture sprint typically takes 3 to 5 weeks. Comprehensive end-to-end digital product design systems or full-stack web builds usually span 6 to 10 weeks. We provide clear milestone deliverables every single Friday.",
  },
  {
    question: "Do you partner with early-stage startups or enterprise companies?",
    answer:
      "Both. We frequently partner with seed-to-Series B funded founders looking to define category leadership, as well as forward-thinking enterprise divisions seeking to revitalize their digital flagships with boutique speed and craft.",
  },
  {
    question: "How do you handle design-to-engineering handoff?",
    answer:
      "We build with production in mind from day one. All typography, colors, and layout tokens are synchronized between Figma and code (Tailwind, CSS Variables, React components). We also provide interactive prototypes and clean Git repositories so your engineering team doesn't have to guess.",
  },
  {
    question: "How quickly can we kick off a new engagement?",
    answer:
      "Because we intentionally take on only 2 to 3 clients per quarter to maintain uncompromising craft, our lead time is typically 1 to 3 weeks. Reach out below to confirm availability and schedule an exploratory intro.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] text-xs font-mono tracking-wider text-[#5B5D66] mb-3">
            <span>05</span>
            <span>/</span>
            <span>COMMON INQUIRIES</span>
          </div>
          <h2 className="font-gerbil text-3xl sm:text-5xl lg:text-[56px] text-[#141517] tracking-tight">
            Frequently Asked{" "}
            <span className="bg-[#D7EEDD] px-3 py-0.5 rounded-full inline-block font-medium">
              Questions
            </span>
          </h2>
          <p className="font-satoshi text-sm sm:text-base text-[#71737A] mt-3">
            Everything you need to know about partnering with our studio.
          </p>
        </div>

        {/* Accordion list */}
        <div className="divide-y divide-[#D5D7DC] border-y border-[#D5D7DC]">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5 sm:py-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span className="font-satoshi font-semibold text-base sm:text-xl text-[#141517] group-hover:text-[#2E5B3E] transition-colors pr-6">
                    {item.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-sm transition-transform duration-200 ${
                      isOpen ? "bg-[#141517] text-white rotate-45" : "bg-white text-[#141517]"
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="pt-3 pr-8 animate-fadeIn">
                    <p className="font-satoshi text-sm sm:text-base text-[#52545C] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
