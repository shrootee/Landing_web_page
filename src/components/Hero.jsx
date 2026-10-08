import { useState } from "react";
import vector from "../assets/Vector 5.svg";
import vector10 from "../assets/Vector 2510.svg";
import vector11 from "../assets/Vector 2511.svg";
import vector2517 from "../assets/Vector 2517.svg";
import rectanglepink from "../assets/Rectangle.pink.svg";
import rectanglegreen from "../assets/Rectangle 658.svg";
import Ellipse736 from "../assets/Ellipse736.svg";
import polygon3 from "../assets/Polygon 3.svg";
import img1 from "../assets/Ellipse 255.png";
import img2 from "../assets/Ellipse 256.png";
import img3 from "../assets/Ellipse 257.png";
import img4 from "../assets/Ellipse 258.png";
import img5 from "../assets/Ellipse 259.png";
import img6 from "../assets/Ellipse 260.png";
import img7 from "../assets/Ellipse 261.png";
import img8 from "../assets/Ellipse 262.png";

const teamMembers = [
  { img: img1, name: "Maya Lin", role: "Creative Strategy", color: "border-[#FF7171]", tag: "Strategy", pos: "left-[3%] top-[40%] md:top-[34%]" },
  { img: img2, name: "Lucas Vance", role: "Design Systems", color: "border-[#347A4B]", tag: "Tokens", pos: "left-[14%] top-[18%] md:top-[12%]" },
  { img: img3, name: "Elena Rostova", role: "Brand Architecture", color: "border-[#934CEC]", tag: "Identity", pos: "left-[26%] top-[58%] md:top-[50%]" },
  { img: img4, name: "Kenzo Sato", role: "Interactive Tech", color: "border-[#FFB703]", tag: "WebGL", pos: "left-[38%] top-[14%] md:top-[8%]" },
  { img: img5, name: "Sophia Thorne", role: "Cultural Research", color: "border-[#0077B6]", tag: "Insights", pos: "left-[52%] top-[60%] md:top-[54%]" },
  { img: img6, name: "David Kim", role: "Product Experience", color: "border-[#E76F51]", tag: "Product", pos: "left-[64%] top-[16%] md:top-[10%]" },
  { img: img7, name: "Amara Diallo", role: "Visual Direction", color: "border-[#934CEC]", tag: "Art Dir", pos: "left-[76%] top-[56%] md:top-[48%]" },
  { img: img8, name: "Oliver Bennett", role: "Creative Tech", color: "border-[#347A4B]", tag: "Fullstack", pos: "right-[3%] top-[24%] md:top-[18%]" },
];

const colorThemes = {
  sage: {
    name: "Sage Mint",
    pillBg: "bg-[#D7EEDD]",
    pillText: "text-[#1C4627]",
    gradient: "from-[#D7EEDD]/50 via-[#FFF6E5]/60 to-[#F0F8F1]/40",
    badgeGlow: "bg-[#347A4B]",
  },
  coral: {
    name: "Vibrant Coral",
    pillBg: "bg-[#FFE0D3]",
    pillText: "text-[#872615]",
    gradient: "from-[#FFD9CE]/60 via-[#FFF3D6]/60 to-[#FFEFEA]/40",
    badgeGlow: "bg-[#FF5A36]",
  },
  violet: {
    name: "Electric Violet",
    pillBg: "bg-[#ECE4FF]",
    pillText: "text-[#431B7F]",
    gradient: "from-[#EADFFF]/60 via-[#FFF0F5]/50 to-[#E8F4F8]/40",
    badgeGlow: "bg-[#934CEC]",
  },
  sun: {
    name: "Golden Solar",
    pillBg: "bg-[#FFF0B8]",
    pillText: "text-[#6B5000]",
    gradient: "from-[#FFF2BC]/70 via-[#FFEAD2]/60 to-[#F6F8E8]/40",
    badgeGlow: "bg-[#E5A100]",
  },
};

const partners = [
  "Linear",
  "Arc & Browser Co.",
  "Raycast",
  "Notion Labs",
  "Stripe Atlas",
  "Kinetic Studio",
  "Prism Spatial",
  "Opal Digital",
];

function Hero() {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [activeTheme, setActiveTheme] = useState("sage");

  const theme = colorThemes[activeTheme];

  return (
    <section id="studio" className="relative pt-6 sm:pt-12 pb-16 lg:pb-24 overflow-hidden">
      {/* 1. Dynamic Ambient Multi-Color Gradient Mesh */}
      <div
        className={`absolute inset-0 bg-gradient-to-tr ${theme.gradient} blur-3xl -z-20 transition-all duration-700 pointer-events-none opacity-80`}
      />

      {/* 2. Sweeping Coral Vector Wave in Background */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[1200px] max-w-none opacity-25 pointer-events-none -z-10 select-none">
        <img
          src={vector2517}
          alt="Flowing vector wave"
          className="w-full h-auto object-cover transform rotate-1 scale-105"
        />
      </div>

      {/* 3. High-Contrast Decorative Floating Vectors (Left Flank) */}
      <div className="absolute left-2 sm:left-6 lg:left-12 top-24 pointer-events-none -z-10 hidden sm:block animate-float-slow">
        <div className="relative">
          {/* Black vector curve */}
          <img
            src={vector11}
            alt=""
            className="w-8 sm:w-12 lg:w-14 opacity-90 drop-shadow-sm"
          />
          {/* Coral pink vector curve intertwined */}
          <img
            src={vector10}
            alt=""
            className="absolute -top-3 -left-3 w-8 sm:w-12 lg:w-14 opacity-95 drop-shadow-md"
          />
        </div>
      </div>

      {/* 4. Vivid Geometric Vectors (Right Flank) */}
      <div className="absolute right-3 sm:right-8 lg:right-16 top-16 pointer-events-none -z-10 animate-float-reverse">
        <div className="relative flex flex-col items-end gap-2">
          {/* Electric Violet Vector Arc */}
          <img
            src={Ellipse736}
            alt="Violet geometry"
            className="w-10 sm:w-16 lg:w-20 opacity-90 drop-shadow-md hover:rotate-12 transition-transform"
          />
          {/* Soft Pink Capsule Pill */}
          <img
            src={rectanglepink}
            alt="Pink capsule"
            className="w-16 sm:w-28 lg:w-36 opacity-85 drop-shadow-sm"
          />
          {/* Soft Sage Capsule Pill */}
          <img
            src={rectanglegreen}
            alt="Sage capsule"
            className="w-20 sm:w-32 lg:w-40 opacity-80 drop-shadow-sm -mt-2"
          />
        </div>
      </div>

      {/* 5. Floating Geometric Polygon Accent */}
      <img
        src={polygon3}
        alt=""
        className="absolute left-1/4 top-14 w-8 sm:w-12 opacity-40 pointer-events-none -z-10 animate-float-reverse hidden md:block"
      />

      {/* Top Interactive Theme & Status Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 sm:mb-8 px-4">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-black/[0.08] shadow-sm backdrop-blur-md text-xs font-satoshi text-[#46484F]">
          <span className={`w-2 h-2 rounded-full ${theme.badgeGlow} animate-pulse`}></span>
          <span className="font-semibold text-[#141517]">Strategic Design Studio</span>
          <span className="text-[#A3A5AC]">•</span>
          <span className="text-[#64666E]">Accepting Select Q3/Q4 Projects</span>
        </div>

        {/* Live Color Accent Mood Switcher */}
        <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-white/85 border border-black/[0.08] shadow-xs backdrop-blur-md text-xs font-satoshi">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#7A7C85] px-2 hidden sm:inline">
            Studio Mood:
          </span>
          {Object.entries(colorThemes).map(([key, item]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTheme(key)}
              title={item.name}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                activeTheme === key
                  ? `${item.pillBg} ${item.pillText} font-semibold shadow-xs scale-105`
                  : "text-[#555761] hover:bg-black/5"
              }`}
            >
              {item.name.split(" ")[1]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Hero Typography Lockup */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="relative inline-block">
          <h1 className="font-gerbil font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[86px] text-[#141517] tracking-tight leading-[1.03] sm:leading-[1.01]">
            The thinkers and doers <br />
            who{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span
                className={`${theme.pillBg} ${theme.pillText} px-3.5 sm:px-5 py-0.5 rounded-full inline-block font-semibold transition-colors duration-300 shadow-xs`}
              >
                redefine
              </span>
              {/* Vibrant Golden Scribble Vector Asset */}
              <span className="absolute -bottom-2 sm:-bottom-4 left-0 w-full pointer-events-none -z-10">
                <img
                  src={vector}
                  alt="Accent highlight scribble"
                  className="w-full h-auto object-contain drop-shadow-[0_2px_8px_rgba(255,194,80,0.5)]"
                />
              </span>
            </span>{" "}
            the status quo.
          </h1>
        </div>

        {/* Subtitle Copy */}
        <p className="font-satoshi font-normal text-[#4A4C54] mt-6 sm:mt-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          We are an independent creative collective of strategists, designers, communicators, and researchers.
          Together, we believe that real progress only happens when you refuse to play things safe.
        </p>

        {/* Action Buttons with Colorful Micro-Badges */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#services"
            className="inline-flex items-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#141517] text-white text-sm font-satoshi font-semibold tracking-wide hover:bg-[#2A2B30] active:scale-95 transition-all shadow-lg hover:shadow-xl group"
          >
            <span>Explore Capabilities</span>
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>

          <a
            href="#testimonials"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/90 hover:bg-white text-[#141517] text-sm font-satoshi font-semibold border border-black/10 hover:border-black/25 active:scale-95 transition-all shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF7171]"></span>
            <span>Partner Stories</span>
            <span className="text-[#71737A]">↓</span>
          </a>
        </div>

        {/* Value Prop Badges Strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-satoshi">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-black/[0.06] shadow-2xs text-[#2A2B30]">
            <span className="text-[#347A4B]">✦</span> Verified Sprint Methodology
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-black/[0.06] shadow-2xs text-[#2A2B30]">
            <span className="text-[#934CEC]">●</span> Headless & Tokenized Systems
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-black/[0.06] shadow-2xs text-[#2A2B30]">
            <span className="text-[#FF7171]">★</span> 40+ International Awards
          </span>
        </div>
      </div>

      {/* Dynamic Interactive Team Constellation Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16 relative">
        {/* Desktop & Tablet Floating Constellation */}
        <div className="relative w-full h-[230px] sm:h-[310px] md:h-[350px] rounded-3xl bg-gradient-to-b from-white/70 via-white/50 to-white/20 border border-black/[0.06] shadow-sm p-4 hidden sm:block overflow-hidden backdrop-blur-xs">
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none"></div>

          {/* Active Hover Inspector Card in Center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none text-center">
            <div className="px-5 py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-black/10 shadow-xl inline-flex items-center gap-3 transition-all duration-200">
              <span className={`w-2.5 h-2.5 rounded-full ${theme.badgeGlow} animate-ping`}></span>
              <div className="text-left">
                <p className="text-xs font-bold text-[#141517] font-satoshi flex items-center gap-1.5">
                  <span>{hoveredMember ? hoveredMember.name : "Interdisciplinary Studio"}</span>
                  {hoveredMember && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/5 font-mono text-[#52545C]">
                      {hoveredMember.tag}
                    </span>
                  )}
                </p>
                <p className="text-[11px] text-[#63666F] font-satoshi">
                  {hoveredMember ? hoveredMember.role : "Hover any team node to inspect specialty"}
                </p>
              </div>
            </div>
          </div>

          {/* Team Nodes with Color Accent Rings */}
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredMember(member)}
              onMouseLeave={() => setHoveredMember(null)}
              className={`absolute ${member.pos} cursor-pointer group transition-all duration-300 hover:scale-115 hover:z-30`}
            >
              <div className="relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className={`w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover border-[3px] ${member.color} shadow-md group-hover:shadow-lg transition-all`}
                />
                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white border-2 border-black/10 flex items-center justify-center text-[9px] font-bold shadow-xs">
                  ✦
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Friendly Avatars Strip (100% Responsive) */}
        <div className="sm:hidden mt-6 bg-white/80 backdrop-blur-md border border-black/5 rounded-2xl p-4 text-center shadow-xs">
          <p className="text-xs uppercase font-mono tracking-wider text-[#686B74] mb-3">
            Interdisciplinary Studio Collective
          </p>
          <div className="flex items-center justify-center -space-x-2.5 overflow-hidden py-1">
            {teamMembers.slice(0, 6).map((member, i) => (
              <img
                key={i}
                src={member.img}
                alt={member.name}
                className={`w-11 h-11 rounded-full border-2 ${member.color} object-cover shadow-sm`}
              />
            ))}
            <div className={`w-11 h-11 rounded-full border-2 border-white ${theme.pillBg} ${theme.pillText} font-bold text-xs flex items-center justify-center shadow-sm`}>
              +12
            </div>
          </div>
          <p className="text-xs text-[#52545C] mt-2 font-satoshi">
            Strategy • Brand Systems • Design Research • WebGL
          </p>
        </div>
      </div>

      {/* Partner Marquee Ticker */}
      <div className="mt-14 sm:mt-20 border-y border-black/[0.06] bg-white/60 backdrop-blur-xs py-4 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="flex-shrink-0 text-xs font-mono uppercase tracking-widest text-[#71737A] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#141517]"></span>
            <span>Selected Studio Collaborations</span>
          </div>
          <div className="relative w-full overflow-hidden mask-fade">
            <div className="animate-marquee items-center gap-10 sm:gap-14 text-sm sm:text-base font-gerbil text-[#474950]">
              {partners.concat(partners).map((partner, index) => (
                <div key={index} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="hover:text-[#141517] transition-colors">{partner}</span>
                  <span className="text-[#C4C6CD] text-xs">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;