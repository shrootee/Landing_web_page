import { useState } from "react";
import vector from "../assets/Vector 5.svg";

const servicesData = [
  {
    id: "01",
    category: "brand",
    categoryLabel: "Brand & Identity",
    clientContext: "Comprehensive identity overhaul for category-defining ventures",
    title: "Collaborative Brand Architecture",
    summary:
      "We design complete identity ecosystems that scale seamlessly from billboard campaigns to 16px favicons.",
    deliverables: [
      "Visual & Verbal Identity",
      "Design Systems & Tokenization",
      "Motion & Sonic Guidelines",
      "Brand Operating Manual",
    ],
    timeline: "3–6 Weeks Sprint",
  },
  {
    id: "02",
    category: "product",
    categoryLabel: "Product & UI/UX",
    clientContext: "End-to-end interface systems for SaaS, mobile, and web apps",
    title: "Digital Product Experience",
    summary:
      "We craft intuitive user experiences that turn complex technical workflows into effortless daily habits.",
    deliverables: [
      "Figma Design Systems",
      "Multi-Platform UX Architecture",
      "Interactive Micro-Prototypes",
      "Usability Validation Tests",
    ],
    timeline: "4–8 Weeks Sprint",
  },
  {
    id: "03",
    category: "tech",
    categoryLabel: "Creative Tech",
    clientContext: "Award-caliber interactive platforms with sub-second performance",
    title: "High-Performance Web Engineering",
    summary:
      "Translating ambitious visual ideas into responsive, accessible, pixel-perfect frontend code with zero compromise.",
    deliverables: [
      "Modern Web Architecture",
      "Fluid Animations & Micro-Interactions",
      "SEO & Core Web Vitals 95+",
      "Headless CMS Integration",
    ],
    timeline: "3–6 Weeks Sprint",
  },
  {
    id: "04",
    category: "research",
    categoryLabel: "Strategic Research",
    clientContext: "Market positioning and ethnographic audience insights",
    title: "Strategic Discovery & Research",
    summary:
      "Uncovering unvarnished market realities and customer sentiment to ensure your product answers genuine human needs.",
    deliverables: [
      "In-Depth Stakeholder Audits",
      "Competitive White-Space Analysis",
      "User Persona & Journey Maps",
      "GTM Strategy Roadmap",
    ],
    timeline: "2–4 Weeks Sprint",
  },
];

function Services() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedId, setExpandedId] = useState("01");

  const filteredServices =
    activeFilter === "all"
      ? servicesData
      : servicesData.filter((s) => s.category === activeFilter);

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] text-xs font-mono tracking-wider text-[#5B5D66]">
              <span>03</span>
              <span>/</span>
              <span>STUDIO OFFERINGS</span>
            </div>

            <div className="relative inline-block">
              <h2 className="font-gerbil font-normal text-3xl sm:text-5xl lg:text-[68px] leading-[1.02] text-[#141517] tracking-tight">
                What we{" "}
                <span className="bg-[#D7EEDD] px-3 sm:px-4 py-0.5 rounded-full inline-block font-medium">
                  can
                </span>
                <br />
                offer you.
              </h2>
              {/* Subtle underline accent */}
              <div className="absolute -bottom-2 sm:-bottom-4 left-0 w-36 sm:w-56 pointer-events-none -z-10 opacity-70">
                <img src={vector} alt="" className="w-full" />
              </div>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2 md:pt-0">
            {[
              { id: "all", label: "All Disciplines" },
              { id: "brand", label: "Brand Identity" },
              { id: "product", label: "Product & UI/UX" },
              { id: "tech", label: "Web Engineering" },
              { id: "research", label: "Research" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-satoshi font-medium transition-all ${
                  activeFilter === tab.id
                    ? "bg-[#141517] text-white shadow-sm"
                    : "bg-white/80 hover:bg-white text-[#52545C] border border-black/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Interactive List */}
        <div className="border-t border-[#D5D7DC] divide-y divide-[#D5D7DC]">
          {filteredServices.map((service) => {
            const isExpanded = expandedId === service.id;
            return (
              <div
                key={service.id}
                className={`transition-colors duration-200 ${
                  isExpanded ? "bg-[#F3F6F1]/50 rounded-2xl" : "hover:bg-white/50"
                }`}
              >
                <div
                  onClick={() => setExpandedId(isExpanded ? null : service.id)}
                  className="py-7 sm:py-9 px-3 sm:px-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 group"
                >
                  {/* Left: Index & Micro Context */}
                  <div className="flex items-center gap-4 md:w-1/4">
                    <span className="font-mono text-sm text-[#8A8D96] group-hover:text-[#141517] transition-colors">
                      {service.id}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#71737A] bg-black/[0.04] px-2.5 py-1 rounded-md">
                      {service.categoryLabel}
                    </span>
                  </div>

                  {/* Center: Title & Short context */}
                  <div className="md:w-1/2">
                    <h3 className="font-gerbil text-2xl sm:text-3xl lg:text-4xl text-[#141517] group-hover:text-[#2E5B3E] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#71737A] font-satoshi mt-1">
                      {service.clientContext}
                    </p>
                  </div>

                  {/* Right: Timeline & Toggle Arrow */}
                  <div className="flex items-center justify-between md:justify-end gap-6 md:w-1/4">
                    <span className="text-xs font-mono text-[#52545C] bg-white border border-black/10 px-3 py-1 rounded-full">
                      {service.timeline}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300 ${
                        isExpanded
                          ? "bg-[#141517] text-white rotate-90"
                          : "bg-white text-[#141517] group-hover:bg-[#141517] group-hover:text-white"
                      }`}
                    >
                      <span className="text-lg">→</span>
                    </div>
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="px-4 sm:px-8 pb-8 pt-2 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-7 space-y-3">
                      <p className="text-sm font-satoshi text-[#46484F] leading-relaxed">
                        {service.summary}
                      </p>
                      <div className="pt-2">
                        <p className="text-xs font-mono uppercase tracking-wider text-[#71737A] mb-2">
                          Standard Scope & Deliverables
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.deliverables.map((item, i) => (
                            <span
                              key={i}
                              className="text-xs font-satoshi bg-white px-3 py-1 rounded-full border border-black/10 text-[#141517] shadow-2xs"
                            >
                              ✦ {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-5 flex md:justify-end">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141517] text-white text-xs font-satoshi font-semibold tracking-wider uppercase hover:bg-[#2E5B3E] transition-all"
                      >
                        <span>Inquire About This Track</span>
                        <span>→</span>
                      </a>
                    </div>
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

export default Services;
