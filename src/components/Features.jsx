import { useState } from "react";
import polygon3 from "../assets/Polygon 3.svg";
import Ellipse734 from "../assets/Ellipse 734.svg";
import img9 from "../assets/image 348.png";
import polygon1 from "../assets/Polygon 1.svg";
import img11 from "../assets/image 348 (1).png";
import vector from "../assets/Vector 5.svg";

const methodologyPillars = [
  {
    title: "Fearless Inquiry",
    desc: "We interrogate assumptions before drawing a single pixel. Deep ethnographic and market research uncover non-obvious leverage points.",
  },
  {
    title: "Systemic Coherence",
    desc: "Brands aren't logos—they are dynamic operating systems across product, voice, motion, and digital touchpoints.",
  },
  {
    title: "Velocity with Purpose",
    desc: "Iterative rapid prototyping replaces bloated committee cycles, delivering battle-tested design to real users faster.",
  },
];

function Feature() {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedPillar, setExpandedPillar] = useState(false);

  return (
    <section id="philosophy" className="relative py-20 lg:py-32 overflow-hidden bg-white/60">
      {/* Decorative Background Accents - Fully Contained */}
      <img
        src={Ellipse734}
        alt=""
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] opacity-40 pointer-events-none -z-10 blur-xl"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= TOP BLOCK (Philosophy & Vision) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] text-xs font-mono tracking-wider text-[#5B5D66]">
              <span>01</span>
              <span>/</span>
              <span>STUDIO PHILOSOPHY</span>
            </div>

            <h2 className="font-gerbil font-normal text-3xl sm:text-5xl lg:text-[58px] leading-[1.08] text-[#141517] tracking-tight">
              Tomorrow should <br />
              be better than{" "}
              <span className="relative inline-block">
                <span className="bg-[#D7EEDD] px-3 sm:px-4 py-0.5 rounded-full inline-block font-medium">
                  today.
                </span>
                <span className="absolute -bottom-3 left-0 w-full pointer-events-none -z-10">
                  <img src={vector} alt="" className="w-full opacity-90" />
                </span>
              </span>
            </h2>

            <p className="font-satoshi text-base sm:text-lg text-[#52545C] leading-relaxed max-w-xl">
              We are an interdisciplinary team of strategists, designers, communicators, and researchers.
              Together, we believe that durable progress only happens when you refuse to play things safe.
            </p>

            {/* Impact Metric Chips */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-black/[0.06]">
              <div>
                <p className="font-gerbil text-2xl sm:text-3xl text-[#141517]">3.4×</p>
                <p className="text-xs font-satoshi text-[#71737A] mt-0.5">Average reach uplift</p>
              </div>
              <div>
                <p className="font-gerbil text-2xl sm:text-3xl text-[#141517]">98%</p>
                <p className="text-xs font-satoshi text-[#71737A] mt-0.5">Partner retention</p>
              </div>
              <div>
                <p className="font-gerbil text-2xl sm:text-3xl text-[#141517]">40+</p>
                <p className="text-xs font-satoshi text-[#71737A] mt-0.5">Global design honors</p>
              </div>
            </div>

            {/* Interactive Methodology Drawer Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setExpandedPillar(!expandedPillar)}
                className="inline-flex items-center gap-3 text-sm font-satoshi font-semibold text-[#141517] hover:text-[#2E5B3E] transition-colors group"
              >
                <span>{expandedPillar ? "Hide methodology" : "Read our core tenets"}</span>
                <span className="w-8 h-[1.5px] bg-[#141517] group-hover:w-12 group-hover:bg-[#2E5B3E] transition-all"></span>
                <span>{expandedPillar ? "↑" : "↓"}</span>
              </button>

              {expandedPillar && (
                <div className="mt-4 p-5 rounded-2xl bg-[#F4F6F1] border border-black/5 space-y-3 transition-all">
                  {methodologyPillars.map((pillar, i) => (
                    <div key={i} className="space-y-1">
                      <p className="text-xs font-bold font-satoshi text-[#141517] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#347A4B]"></span>
                        {pillar.title}
                      </p>
                      <p className="text-xs text-[#52545C] font-satoshi pl-3.5">{pillar.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Visual Image Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Decorative Polygon Asset */}
              <img
                src={polygon3}
                alt=""
                className="absolute -top-6 -right-6 w-14 sm:w-20 opacity-80 pointer-events-none z-10 animate-float-slow"
              />

              {/* Main Circular Portrait Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2.5 bg-gradient-to-tr from-[#D7EEDD]/70 via-white to-[#F0EFEB] border border-black/[0.08] shadow-xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={img9}
                  alt="Creative director at work"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-black/10 shadow-md text-xs font-satoshi flex items-center gap-2 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-[#347A4B]"></span>
                <span className="font-semibold text-[#141517]">Fearless Strategic Sprints</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line with Monogram */}
        <div className="my-16 lg:my-24 border-t border-black/[0.07] relative">
          <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-[#FAF9F6] px-4 text-xs font-mono text-[#8C8E96]">
            STUDIO CAPABILITIES ✦ 2025
          </span>
        </div>

        {/* ================= BOTTOM BLOCK (Transformation & Action) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative group">
              <img
                src={polygon1}
                alt=""
                className="absolute -left-6 -bottom-6 w-16 sm:w-24 opacity-80 pointer-events-none z-10 animate-float-reverse"
              />

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2.5 bg-gradient-to-br from-[#FFF2D6]/80 via-white to-[#D7EEDD]/60 border border-black/[0.08] shadow-xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={img11}
                  alt="Digital workshop execution"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating Metric Card */}
              <div className="absolute -top-3 right-0 sm:right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-black/10 shadow-lg text-xs font-satoshi space-y-0.5">
                <span className="font-bold text-[#141517]">40% Faster</span>
                <p className="text-[10px] text-[#71737A]">Validated Time-to-Market</p>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] text-xs font-mono tracking-wider text-[#5B5D66]">
              <span>02</span>
              <span>/</span>
              <span>TRANSFORMATION LAYER</span>
            </div>

            <h2 className="font-gerbil font-normal text-3xl sm:text-5xl lg:text-[54px] leading-[1.08] text-[#141517] tracking-tight">
              <span className="bg-[#D7EEDD] px-3 sm:px-4 py-0.5 rounded-full inline-block font-medium">
                See
              </span>{" "}
              how we help you <br />
              accelerate progress.
            </h2>

            <p className="font-satoshi text-base sm:text-lg text-[#52545C] leading-relaxed max-w-xl">
              We add a layer of fearless insight and intentional execution that allows changemakers
              to scale rapidly across brand strategy, product design, digital platforms, and social research.
            </p>

            {/* Interactive Focus Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Brand Architecture", "Design Systems", "Digital Experience", "Creative Tech", "Growth Research"].map((tag, i) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-satoshi transition-all ${
                    activeTab === i
                      ? "bg-[#141517] text-white shadow-sm"
                      : "bg-white border border-black/10 text-[#46484F] hover:bg-black/5"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-white border border-black/[0.06] shadow-sm">
              <p className="text-xs font-mono uppercase tracking-wider text-[#71737A] mb-1">
                Capability Spotlight
              </p>
              <p className="text-sm font-satoshi text-[#25262B] font-medium">
                {activeTab === 0 && "Crafting cohesive visual, verbal, and motion guidelines tailored for high-growth venture ecosystems."}
                {activeTab === 1 && "Building scalable, tokenized Figma and React components that eliminate product drift."}
                {activeTab === 2 && "Architecting immersive web experiences with micro-interactions, responsive typography, and sub-second speed."}
                {activeTab === 3 && "Integrating cutting-edge generative workflows, 3D Canvas, and headless platforms."}
                {activeTab === 4 && "Translating nuanced audience interviews into actionable commercial product opportunities."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;