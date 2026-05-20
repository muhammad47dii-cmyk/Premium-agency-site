import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createEmailLink } from "./ContactActions";
import logo from "../../assets/mustapha-studio-logo.png";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [overDarkSection, setOverDarkSection] = useState(true);

  useEffect(() => {
    setMobileMenuOpen(false);

    if (location.hash) {
      window.setTimeout(() => {
        const el = document.getElementById(location.hash.replace("#", ""));
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    const updateHeaderTheme = () => {
      const probeY = 96;
      const themedSections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-header-theme]"),
      );
      const currentSection = themedSections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= probeY && rect.bottom >= probeY;
      });

      setOverDarkSection(currentSection?.dataset.headerTheme !== "light");
    };

    const scheduleUpdate = () => window.requestAnimationFrame(updateHeaderTheme);

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", updateHeaderTheme);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", updateHeaderTheme);
    };
  }, [location.pathname]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Shopify", href: "/shopify" },
    { name: "Wix", href: "/wix" },
    { name: "Squarespace", href: "/squarespace" },
    { name: "Bubble", href: "/bubble" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-6">
      <nav
        className={`mx-auto max-w-[1640px] rounded-[22px] border px-4 shadow-2xl backdrop-blur-2xl transition-all duration-500 sm:px-6 ${
          overDarkSection
            ? "border-white/12 bg-slate-950/72 shadow-black/35 supports-[backdrop-filter]:bg-slate-950/58"
            : "border-white/45 bg-white/68 shadow-slate-950/10 supports-[backdrop-filter]:bg-white/56"
        }`}
      >
        <div className="flex h-[72px] items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3" aria-label="Mustapha Studio home">
            <motion.img
              src={logo}
              alt="Mustapha Studio"
              decoding="async"
              className={`h-12 w-auto object-contain transition duration-500 sm:h-14 ${
                overDarkSection
                  ? "brightness-0 invert saturate-0 contrast-200 opacity-95 drop-shadow-[0_0_18px_rgba(255,255,255,.34)]"
                  : ""
              }`}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
            />
          </Link>

          <div
            className={`hidden items-center gap-1 rounded-2xl border p-1 shadow-inner transition duration-500 md:flex ${
              overDarkSection
                ? "border-white/10 bg-white/7 shadow-white/5"
                : "border-white/45 bg-white/35 shadow-white/40"
            }`}
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`rounded-xl px-4 py-2.5 text-sm font-bold transition ${
                  location.pathname === item.href
                    ? overDarkSection
                      ? "bg-white text-slate-950 shadow-xl shadow-white/12"
                      : "bg-slate-950 text-white shadow-xl shadow-slate-950/20"
                    : overDarkSection
                      ? "text-white/72 hover:bg-white/10 hover:text-white"
                      : "text-slate-600 hover:bg-white/70 hover:text-slate-950"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/#contact"
              className={`ml-3 inline-flex min-h-12 items-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold shadow-xl transition hover:-translate-y-0.5 ${
                overDarkSection
                  ? "bg-white text-slate-950 shadow-white/12 hover:bg-cyan-100"
                  : "bg-slate-950 text-white shadow-slate-950/25 hover:bg-slate-800"
              }`}
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={createEmailLink(
                "Website project inquiry",
                "Hi Mustapha Studio, I want to discuss a website project.",
              )}
              className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border shadow-inner transition hover:-translate-y-0.5 ${
                overDarkSection
                  ? "border-white/14 bg-white/10 text-white shadow-white/5 hover:bg-white hover:text-slate-950"
                  : "border-white/60 bg-white/45 text-slate-700 shadow-white/40 hover:bg-white hover:text-slate-950"
              }`}
              aria-label="Email Mustapha Studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border md:hidden ${
              overDarkSection
                ? "border-white/15 bg-white/10 text-white"
                : "border-white/60 bg-white/45 text-slate-950"
            }`}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className={`border-t py-4 md:hidden ${
              overDarkSection ? "border-white/10" : "border-white/45"
            }`}
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-4 py-3 text-base font-semibold ${
                  location.pathname === item.href
                    ? "bg-slate-950 text-white"
                    : "text-slate-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/#contact"
              className="mx-4 mt-4 flex min-h-12 items-center justify-center gap-2 bg-slate-950 px-6 py-3 text-center text-sm font-semibold text-white"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={createEmailLink(
                "Website project inquiry",
                "Hi Mustapha Studio, I want to discuss a website project.",
              )}
              className="mx-4 mt-3 flex min-h-12 items-center justify-center gap-2 border border-slate-200 px-6 py-3 text-center text-sm font-semibold text-slate-950"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="h-4 w-4" />
              Email Us
            </a>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
