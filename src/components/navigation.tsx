import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { Link, useLocation } from "react-router";
import {
  setStoredLanguage,
  useTranslationsContext,
  type Language,
} from "@/lib/i18n";

interface NavigationProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Navigation({ currentLang, onLanguageChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Changed: use useLocation hook
  const { t } = useTranslationsContext();

  // Always start transparent and change on scroll for all pages
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]); // Changed: use location.pathname

  const navItems = [
    { name: t("nav.home") as string, to: "/" }, // Changed href to to
    { name: t("nav.about") as string, to: "/about" }, // Changed href to to
    { name: t("nav.products") as string, to: "/products" }, // Changed href to to
    { name: t("nav.subscription") as string, to: "/subscription" }, // Changed href to to
    { name: t("nav.contact") as string, to: "/contact" }, // Changed href to to
  ];

  const toggleLanguage = () => {
    const newLang = currentLang === "pt" ? "en" : "pt";
    setStoredLanguage(newLang);
    onLanguageChange(newLang);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50"
          : "bg-white/10 backdrop-blur-xl border-b border-white/30"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            {" "}
            {/* Changed href to to */}
            <div className="relative">
              <div
                className={`absolute inset-0 bg-gradient-to-r from-[#7257FF] to-blue-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity`}
              />
              <div className="relative bg-gradient-to-r bg-[#7257FF] p-2 rounded-xl">
                <img
                  src="/logo_box.svg"
                  alt="ProteJÁ Logo"
                  className="h-8 w-8"
                />
              </div>
            </div>
            <span className="text-2xl font-bold">
              <img
                src="/proteja-name.svg"
                alt="ProteJÁ"
                className={`h-12 w-auto -ml-3 mb-2 transition duration-300 ${
                  isScrolled ? "" : "filter brightness-0 saturate-200 invert"
                }`}
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to} // Changed href to to
                className={`relative px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  location.pathname === item.to // Changed pathname to location.pathname
                    ? isScrolled
                      ? "text-white bg-[#7257FF] shadow-lg"
                      : "text-[#7257FF] bg-white/90 shadow-lg"
                    : isScrolled
                    ? "text-gray-700 hover:text-[#7257FF] hover:bg-[#7257FF]/10"
                    : "text-white/90 hover:text-white hover:bg-white/20"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className={`gap-2 rounded-full px-4 transition-all duration-300 ${
                isScrolled
                  ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <Globe className="h-4 w-4" />
              {currentLang.toUpperCase()}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/20"
              }`}
            >
              <Globe className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/20"
              }`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className={`lg:hidden border-t shadow-2xl transition-all duration-300 ${
              isScrolled
                ? "bg-white/98 backdrop-blur-xl border-gray-200/50"
                : "bg-white/95 backdrop-blur-xl border-white/30"
            } rounded-b-3xl`}
          >
            <div className="py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to} // Changed href to to
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 rounded-2xl mx-4 transition-all duration-300 font-medium ${
                    location.pathname === item.to // Changed pathname to location.pathname
                      ? "text-white bg-[#7257FF] shadow-lg"
                      : "text-gray-800 hover:text-[#7257FF] hover:bg-[#7257FF]/10"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
