import { useState } from "react";
import img1 from "../assets/Ellipse 263.png";
import img2 from "../assets/Ellipse 264.png";
import img3 from "../assets/Ellipse 265.png";
import img4 from "../assets/Ellipse 266.png";
import img5 from "../assets/Ellipse 267.png";
import img6 from "../assets/Ellipse 268.png";
import img7 from "../assets/Ellipse 269.png";
import img8 from "../assets/Ellipse 270.png";
import vector from "../assets/Vector 5.svg";

const testimonials = [
  {
    id: 0,
    quote:
      "Elemental delivered the site within the exact timeline and budget requested. In the end, we achieved a 50% increase in qualified inbound traffic within days of launch. Their ability to introduce modern tech stacks into our stack was painless, robust, and extraordinarily high-craft.",
    author: "Sarah Jenkins",
    role: "VP of Digital & Growth",
    company: "Aura Platforms",
    metric: "+50% Traffic Uplift",
    avatar: img1,
    tag: "Series B Venture",
  },
  {
    id: 1,
    quote:
      "Their team pushed us out of our comfort zone in the best possible way. The visual architecture and component library they delivered gave our engineers a shared language that sped up shipping cycles by 3x.",
    author: "David Lindqvist",
    role: "Head of Product",
    company: "Kinetix Studio",
    metric: "3× Shipping Velocity",
    avatar: img2,
    tag: "Design System",
  },
  {
    id: 2,
    quote:
      "Unlike conventional agencies that hand off static Figma files and disappear, Elemental built living interactive prototypes with our real data. The final rollout went live without a single visual regression.",
    author: "Elena Rostova",
    role: "Chief Marketing Officer",
    company: "Verve Living",
    metric: "12 Global Markets",
    avatar: img5,
    tag: "Global Rebrand",
  },
  {
    id: 3,
    quote:
      "The aesthetic poise of Elemental is unmatched. They took a dry, complicated B2B SaaS platform and turned it into an editorial product that our users genuinely rave about on social media.",
    author: "Kenji Takahashi",
    role: "Founder & CEO",
    company: "Prism Synthetics",
    metric: "4.9/5 User CSAT",
    avatar: img8,
    tag: "Product Overhaul",
  },
];

const allAvatars = [
  { img: img1, name: "Sarah J." },
  { img: img2, name: "David L." },
  { img: img3, name: "Maria C." },
  { img: img4, name: "Julian B." },
  { img: img5, name: "Elena R." },
  { img: img6, name: "Tariq K." },
  { img: img7, name: "Camilla F." },
  { img: img8, name: "Kenji T." },
];

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = testimonials[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-20 lg:py-28 bg-[#F4F6F0] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] text-xs font-mono tracking-wider text-[#5B5D66] mb-4">
            <span>04</span>
            <span>/</span>
            <span>PARTNER TESTIMONIALS</span>
          </div>

          <div className="relative inline-block">
            <h2 className="font-gerbil font-normal text-3xl sm:text-5xl lg:text-[62px] leading-[1.05] text-[#141517] tracking-tight">
              <span className="bg-[#D7EEDD] px-3 sm:px-4 py-0.5 rounded-full inline-block font-medium">
                What
              </span>{" "}
              our partners <br />
              say about us.
            </h2>
            <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 -translate-x-1/2 w-44 sm:w-64 pointer-events-none -z-10 opacity-70">
              <img src={vector} alt="" className="w-full" />
            </div>
          </div>
        </div>

        {/* Interactive Avatar Navigation Selector Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-8">
          {testimonials.map((t, idx) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`group flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${
                activeIndex === idx
                  ? "bg-white border-[#141517] shadow-sm scale-105"
                  : "bg-white/60 border-black/5 hover:bg-white text-[#71737A]"
              }`}
            >
              <img
                src={t.avatar}
                alt={t.author}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span
                className={`text-xs font-satoshi font-medium ${
                  activeIndex === idx ? "text-[#141517]" : "text-[#71737A]"
                }`}
              >
                {t.company}
              </span>
            </button>
          ))}
        </div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card Container */}
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 md:p-14 shadow-[0_12px_40px_rgb(0,0,0,0.04)] border border-black/[0.06] transition-all">
            {/* Top row with Quote Icon & Metric */}
            <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-1 text-[#2E5B3E]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-base sm:text-lg">★</span>
                ))}
                <span className="ml-2 text-xs font-mono uppercase tracking-wider text-[#71737A]">
                  Verified Partnership
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D7EEDD]/80 text-[#2E5B3E] text-xs font-mono font-medium">
                <span>✦</span>
                <span>{current.metric}</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="font-satoshi text-base sm:text-xl md:text-2xl text-[#1E2024] leading-relaxed font-normal">
              "{current.quote}"
            </blockquote>

            {/* Bottom Row: Author details & Nav Controls */}
            <div className="mt-8 sm:mt-10 pt-6 border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#D7EEDD]"
                />
                <div>
                  <h4 className="font-satoshi font-bold text-sm sm:text-base text-[#141517]">
                    {current.author}
                  </h4>
                  <p className="font-satoshi text-xs text-[#71737A]">
                    {current.role} • <span className="font-medium text-[#141517]">{current.company}</span>
                  </p>
                </div>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 rounded-full border border-black/10 bg-white hover:bg-black hover:text-white flex items-center justify-center text-sm transition-all shadow-2xs active:scale-95"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="w-10 h-10 rounded-full border border-black/10 bg-white hover:bg-black hover:text-white flex items-center justify-center text-sm transition-all shadow-2xs active:scale-95"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Partner Facepile strip below */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="text-xs font-mono text-[#71737A] mr-2">Featured Leaders:</span>
            <div className="flex items-center -space-x-2">
              {allAvatars.map((a, i) => (
                <img
                  key={i}
                  src={a.img}
                  alt={a.name}
                  title={a.name}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-2xs"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
