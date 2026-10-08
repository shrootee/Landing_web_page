import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Studio", href: "#studio" },
    { label: "Capabilities", href: "#services" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Stories", href: "#testimonials" },
    { label: "FAQs", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300">
      <nav
        className={`mx-auto max-w-6xl transition-all duration-300 rounded-full px-5 sm:px-7 py-3.5 flex items-center justify-between ${
          isScrolled
            ? "bg-white/85 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-black/5"
            : "bg-white/60 backdrop-blur-sm border border-black/[0.04]"
        }`}
      >
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-2.5 h-2.5 rounded-full bg-[#141517] group-hover:bg-[#347A4B] transition-colors"></span>
          <span className="font-gerbil text-xl sm:text-2xl font-bold tracking-tight text-[#141517]">
            Elemental
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase font-mono tracking-widest text-[#71737A] ml-1 bg-black/[0.04] px-2 py-0.5 rounded-full">
            Studio
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8 font-satoshi text-sm font-medium text-[#46484F]">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="hover:text-[#141517] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#141517] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider font-satoshi px-5 py-2.5 rounded-full bg-[#141517] text-white hover:bg-[#282A30] active:scale-95 transition-all shadow-sm"
          >
            <span>Let's Talk</span>
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full hover:bg-black/5 transition-colors"
          >
            <span
              className={`block w-5 h-0.5 bg-[#141517] transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-[#141517] my-1 transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-[#141517] transition-transform duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden mx-auto max-w-6xl mt-2 ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border border-black/5 rounded-3xl p-6 shadow-xl space-y-4">
          <ul className="space-y-3 font-satoshi text-base font-medium text-[#141517]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 hover:text-[#347A4B] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-black/5 flex items-center justify-between">
            <span className="text-xs font-mono text-[#71737A]">Available for Q3/Q4</span>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full bg-[#141517] text-white"
            >
              Start Project →
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
