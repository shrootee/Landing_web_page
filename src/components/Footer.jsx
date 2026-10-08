import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText("hello@elementalstudio.design");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#DDECDD] relative overflow-hidden border-t border-[#CADBCA]">
      {/* Subtle organic noise/gradient background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-white/30 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        {/* ================= TOP CTA & NEWSLETTER ================= */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] text-xs font-mono tracking-wider text-[#2E5B3E] mb-4">
            <span>GET IN TOUCH</span>
            <span>✦</span>
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="font-gerbil font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[84px] text-[#141517] tracking-tight leading-[0.98]">
            Let's build something <br />
            truly memorable.
          </h2>

          <p className="mt-6 text-sm sm:text-base text-[#415343] font-satoshi max-w-xl mx-auto leading-relaxed">
            Subscribe to our quarterly dispatch on design strategy, creative tech, and branding insights—or reach out directly for project inquiries.
          </p>

          {/* Email Newsletter Box */}
          <div className="mt-8 sm:mt-10 max-w-md mx-auto">
            {subscribed ? (
              <div className="p-4 rounded-full bg-white border border-[#2E5B3E]/30 text-[#2E5B3E] font-satoshi text-xs sm:text-sm font-medium flex items-center justify-center gap-2 shadow-sm animate-fadeIn">
                <span>✦</span>
                <span>You're on the list! Welcome to the Elemental journal.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email address..."
                  required
                  className="w-full pl-5 pr-36 py-3.5 sm:py-4 rounded-full bg-white/90 border border-black/10 focus:border-[#141517] focus:bg-white text-xs sm:text-sm font-satoshi outline-none transition-all shadow-sm placeholder:text-[#879687]"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 px-5 py-2.5 sm:py-3 rounded-full bg-[#141517] text-white text-xs font-satoshi font-semibold tracking-wider hover:bg-[#282A30] active:scale-95 transition-all shadow-sm"
                >
                  Join Dispatch
                </button>
              </form>
            )}
          </div>

          {/* Quick Copy Email Button */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="text-xs text-[#556956] font-satoshi">Direct inquiry:</span>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#141517] hover:text-[#2E5B3E] bg-white/70 px-3 py-1 rounded-full border border-black/5 hover:border-black/20 transition-all"
            >
              <span>hello@elementalstudio.design</span>
              <span className="text-[10px] text-[#2E5B3E]">{copied ? "✓ Copied" : "📋"}</span>
            </button>
          </div>
        </div>

        {/* Divider with Back to Top */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#B9CAB9] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2E5B3E] animate-pulse"></span>
            <span className="text-xs font-mono text-[#435944]">Chicago & Remote • Active Status</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#354B36] hover:text-[#141517] transition-colors"
          >
            <span>Back to top</span>
            <span>↑</span>
          </button>
        </div>

        {/* ================= LINKS GRID ================= */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {/* Column 1 */}
          <div>
            <h3 className="font-satoshi font-bold text-sm uppercase tracking-wider text-[#141517] mb-4">
              Studio
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-satoshi text-[#435944]">
              <li>
                <a href="#studio" className="hover:text-[#141517] transition-colors">
                  About Collective
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-[#141517] transition-colors">
                  Methodology & Values
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#141517] transition-colors">
                  Service Tracks
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#141517] transition-colors">
                  Partner Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-satoshi font-bold text-sm uppercase tracking-wider text-[#141517] mb-4">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-satoshi text-[#435944]">
              <li>
                <span className="hover:text-[#141517] transition-colors cursor-pointer">
                  Brand Architecture
                </span>
              </li>
              <li>
                <span className="hover:text-[#141517] transition-colors cursor-pointer">
                  UI/UX Design Systems
                </span>
              </li>
              <li>
                <span className="hover:text-[#141517] transition-colors cursor-pointer">
                  Creative Web Engineering
                </span>
              </li>
              <li>
                <span className="hover:text-[#141517] transition-colors cursor-pointer">
                  Strategic Discovery
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-satoshi font-bold text-sm uppercase tracking-wider text-[#141517] mb-4">
              Network
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-satoshi text-[#435944]">
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#141517] transition-colors flex items-center justify-between">
                  <span>Twitter / X</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#141517] transition-colors flex items-center justify-between">
                  <span>LinkedIn</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#141517] transition-colors flex items-center justify-between">
                  <span>Instagram</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#141517] transition-colors flex items-center justify-between">
                  <span>GitHub</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-satoshi font-bold text-sm uppercase tracking-wider text-[#141517] mb-4">
              Locations
            </h3>
            <div className="space-y-2 text-xs sm:text-sm font-satoshi text-[#435944]">
              <p className="font-medium text-[#141517]">Chicago Studio</p>
              <p>1498 W Fulton St, Suite 2D</p>
              <p>Chicago, IL 60607</p>
              <p className="pt-2 text-xs text-[#5A6E5A]">Mon–Fri: 09:00 – 18:00 CST</p>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#B9CAB9] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-satoshi text-[#4A614B]">
          <div className="flex items-center gap-2">
            <span className="font-gerbil font-bold text-sm text-[#141517]">Elemental</span>
            <span>© 2025 Elemental Creative Studio LLC. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#141517] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#141517] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#141517] transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;