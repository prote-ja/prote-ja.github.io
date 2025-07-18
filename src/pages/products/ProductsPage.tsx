import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Star,
  ArrowRight,
  Package,
  Sparkles,
  TrendingDown,
  Gift,
} from "lucide-react";
import { PRICING, CALCULATED_PRICING, formatPrice } from "@/lib/pricing";
import { Link } from "react-router";
import { useTranslationsContext } from "@/lib/i18n";

export default function ProductsPage() {
  const {
    t,
    lang: currentLang,
    setLang: setCurrentLang,
  } = useTranslationsContext();

  const handleSubscribe = () => {
    alert(
      "Obrigado pelo interesse! Em breve entraremos em contato com mais informações."
    );
  };

  const products = [
    {
      name: t("products.items.bracelet.name") as string,
      description: t("products.items.bracelet.description") as string,
      features: t("products.items.bracelet.features") as string[], // This one is correctly 'as string[]'
      price: formatPrice(PRICING.products.bracelet),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: t("products.items.totem.name") as string,
      description: t("products.items.totem.description") as string,
      features: t("products.items.totem.features") as string[],
      price: formatPrice(PRICING.products.totem),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: t("products.items.kit.name") as string,
      description: t("products.items.kit.description") as string,
      features: t("products.items.kit.features") as string[],
      price: formatPrice(PRICING.products.kit),
      originalPrice: formatPrice(CALCULATED_PRICING.individualTotal),
      hardwareSavings: formatPrice(CALCULATED_PRICING.kitDiscount),
      subscriptionSavings: formatPrice(
        CALCULATED_PRICING.yearlySubscriptionValue
      ),
      totalSavings: formatPrice(CALCULATED_PRICING.totalKitSavings),
      isPopular: true,
      image: "/placeholder.svg?height=300&width=400",
    },
  ];
  return (
    <div className="min-h-screen">
      <Navigation currentLang={currentLang} onLanguageChange={setCurrentLang} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#7257FF] via-[#5d47e6] to-[#4c3bcc]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-blue-300/20 rounded-full blur-lg animate-bounce"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.05%3E%3Ccircle cx=30 cy=30 r=1/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
              <Package className="h-5 w-5 text-white" />
              <span className="text-sm font-medium">{t("products.badge")}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t("products.title")}
            </h1>
            <p className="text-xl text-white/90 mb-4 font-medium leading-relaxed">
              {t("products.subtitle")}
            </p>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              {t("products.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card
                  key={index}
                  className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                    product.isPopular
                      ? "border-2 border-[#7257FF]/30 shadow-xl"
                      : "border border-gray-200"
                  }`}
                >
                  {product.isPopular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-[#7257FF] to-blue-600 text-white">
                        <Star className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    </div>
                  )}

                  {product.image && (
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {product.name}
                    </CardTitle>
                    <p className="text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      {product.features.map(
                        (feature: string, index: number) => (
                          <div key={index} className="flex items-center gap-3">
                            <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        )
                      )}
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      {/* Pricing Section */}
                      <div className="mb-4">
                        {product.originalPrice && (
                          <div className="mb-3">
                            <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                              <span>{t("products.originalPrice")}</span>
                              <span className="line-through">
                                {product.originalPrice}
                              </span>
                            </div>

                            {/* Hardware Savings */}
                            <div className="flex items-center justify-between mb-1">
                              <div className="flex items-center gap-2">
                                <TrendingDown className="h-4 w-4 text-green-600" />
                                <span className="text-sm font-medium text-green-600">
                                  {t("products.savings")}{" "}
                                  {product.hardwareSavings}
                                </span>
                              </div>
                            </div>

                            {/* Subscription Savings */}
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Gift className="h-4 w-4 text-purple-600" />
                                <span className="text-sm font-medium text-purple-600">
                                  {t("products.subscriptionSavings")}{" "}
                                  {product.subscriptionSavings}
                                </span>
                              </div>
                            </div>

                            {/* Total Savings */}
                            <div className="bg-green-50 border border-green-200 rounded-lg p-2 mb-2">
                              <div className="flex items-center justify-center gap-2">
                                <Star className="h-4 w-4 text-green-600" />
                                <span className="text-sm font-bold text-green-700">
                                  {t("products.totalSavings")}{" "}
                                  {product.totalSavings}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="text-3xl font-bold text-[#7257FF] mb-2">
                          {product.price}
                        </div>
                        {product.isPopular && (
                          <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                            <Star className="h-3 w-3" />
                            {t("products.freeSubscription")}
                          </div>
                        )}
                      </div>

                      <Button
                        onClick={handleSubscribe}
                        className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                          product.isPopular
                            ? "bg-gradient-to-r from-[#7257FF] to-blue-600 hover:from-[#7257FF] hover:to-blue-700 text-white shadow-lg hover:shadow-xl"
                            : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                        }`}
                      >
                        {t("products.subscribe")}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscription CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-[#7257FF]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-md">
              <CardContent className="p-12">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-100 rounded-full mb-6">
                  <Sparkles className="h-5 w-5 text-[#7257FF]" />
                  <span className="text-sm font-medium text-[#7257FF]">
                    {t("products.cta.badge")}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#7257FF] to-blue-600 bg-clip-text text-transparent">
                  {t("products.cta.title")}
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  {t("products.cta.description")}
                </p>
                <Link to="/subscription">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#7257FF] to-blue-600 hover:from-[#7257FF]/90 hover:to-blue-600/90 text-white px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    {t("products.cta.button")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
