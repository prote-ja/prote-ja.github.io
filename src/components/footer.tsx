import { useTranslationsContext } from "@/lib/i18n";
import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  const { t } = useTranslationsContext();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo-long.svg" alt="ProteJÁ" className="h-12 w-auto" />

              {/* <Heart className="h-6 w-6 text-pink-400" /> */}
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
