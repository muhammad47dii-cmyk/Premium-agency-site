import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

useEffect(() => {
  if (location.hash === "#contact") {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [location]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Shopify", href: "/shopify" },
    { name: "Wix", href: "/wix" },
    { name: "Squarespace", href: "/squarespace" },
    { name: "Bubble", href: "/bubble" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
  <motion.img
  src="https://www.image2url.com/r2/default/files/1776553011830-12dc8b20-b8e2-4741-993f-14bd3c86cd2f.jpeg"
  alt="Mustapha Studio Logo"
  className="h-25 md:h-10 w-auto object-contain"
/>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
  to="/#contact"
  className="px-6 py-2.5 bg-blue-600 text-white rounded-full text-sm font-medium"
>
  Get a Quote
</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-gray-100"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium ${
                  location.pathname === item.href
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
  <Link
  to="/#contact"
  onClick={() => setMobileMenuOpen(false)}
  className="block mx-4 mt-4 px-6 py-2.5 bg-blue-600 text-white rounded-full text-sm font-medium text-center"
>
  Get a Quote
</Link>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
