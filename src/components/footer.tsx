import { Shield, Heart, Mail, MapPin } from "lucide-react";
import { Link } from "react-router"; // Changed: import Link from "react-router-dom"
import { useTranslations, type Language } from "@/lib/i18n";

interface FooterProps {
  currentLang: Language;
}

export function Footer({ currentLang }: FooterProps) {
  const { t } = useTranslations(currentLang);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7257FF] to-blue-500 rounded-xl blur-lg opacity-50" />
                <div className="relative bg-gradient-to-r from-[#7257FF] to-blue-500 p-2 rounded-xl">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#7257FF] to-blue-400 bg-clip-text text-transparent">
                ProteJÁ
              </span>
              <Heart className="h-6 w-6 text-pink-400" />
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
              {t("footer.tagline")}
            </p>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#7257FF]" />
                <a
                  href="mailto:contato@prote-ja.com"
                  className="hover:text-[#7257FF] transition-colors"
                >
                  contato@prote-ja.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#7257FF]" />
                <span>Toledo, Paraná - Brasil</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#7257FF]">
              {t("footer.navigation")}
            </h3>
            <div className="space-y-3">
              <Link
                to="/"
                className="block text-gray-300 hover:text-[#7257FF] transition-colors"
              >
                {" "}
                {/* Changed href to to */}
                {t("nav.home")}
              </Link>
              <Link
                to="/about"
                className="block text-gray-300 hover:text-[#7257FF] transition-colors"
              >
                {" "}
                {/* Changed href to to */}
                {t("nav.about")}
              </Link>
              <Link
                to="/products"
                className="block text-gray-300 hover:text-[#7257FF] transition-colors"
              >
                {" "}
                {/* Changed href to to */}
                {t("nav.products")}
              </Link>
              <Link
                to="/subscription"
                className="block text-gray-300 hover:text-[#7257FF] transition-colors"
              >
                {" "}
                {/* Changed href to to */}
                {t("nav.subscription")}
              </Link>
              <Link
                to="/contact"
                className="block text-gray-300 hover:text-[#7257FF] transition-colors"
              >
                {" "}
                {/* Changed href to to */}
                {t("nav.contact")}
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#7257FF]">
              {t("footer.products")}
            </h3>
            <div className="space-y-3">
              <Link
                to="/products"
                className="block text-gray-300 hover:text-[#7257FF] transition-colors"
              >
                {" "}
                {/* Changed href to to */}
                {t("products.items.bracelet.name")}
              </Link>
              <Link
                to="/products"
                className="block text-gray-300 hover:text-[#7257FF] transition-colors"
              >
                {" "}
                {/* Changed href to to */}
                {t("products.items.totem.name")}
              </Link>
              <Link
                to="/products"
                className="block text-gray-300 hover:text-[#7257FF] transition-colors"
              >
                {" "}
                {/* Changed href to to */}
                {t("products.items.kit.name")}
              </Link>
              <Link
                to="/subscription"
                className="block text-gray-300 hover:text-[#7257FF] transition-colors"
              >
                {" "}
                {/* Changed href to to */}
                {t("subscription.title")}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-16 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} ProteJÁ. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
