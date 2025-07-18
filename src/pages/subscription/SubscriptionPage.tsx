import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  X,
  Shield,
  Brain,
  Crown,
  Users,
  Infinity,
  Clock,
  Zap,
  Star,
  Sparkles,
} from "lucide-react";
import { useTranslationsContext } from "@/lib/i18n";
import { PRICING, CALCULATED_PRICING, formatPrice } from "@/lib/pricing";

export default function SubscriptionPage() {
  const {
    t,
    lang: currentLang,
    setLang: setCurrentLang,
  } = useTranslationsContext();

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
              <Crown className="h-5 w-5 text-white" />
              <span className="text-sm font-medium">
                {t("subscription.badge")}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t("subscription.title")}
            </h1>
            <p className="text-xl text-white/90 mb-4 font-medium leading-relaxed">
              {t("subscription.subtitle")}
            </p>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              {t("subscription.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Pricing Toggle */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-100 rounded-full mb-6">
                <Sparkles className="h-5 w-5 text-[#7257FF]" />
                <span className="text-sm font-medium text-[#7257FF]">
                  {t("subscription.savings")}
                </span>
              </div>
            </div>

            {/* Plans Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-20">
              {/* Basic Plan */}
              <Card className="relative border border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                      <Shield className="h-8 w-8 text-gray-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {t("subscription.plans.basic.name")}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {t("subscription.plans.basic.subtitle")}
                    </p>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {t("subscription.plans.basic.price")}
                    </div>
                    <p className="text-sm text-gray-500">
                      {t("subscription.plans.basic.period")}
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {(t("subscription.plans.basic.features") as string[]).map(
                      (feature: string, index: number) => (
                        <div key={index} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      )
                    )}
                  </div>

                  <Button
                    disabled
                    className="w-full py-3 bg-gray-200 text-gray-500 cursor-not-allowed rounded-xl"
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    {t("subscription.comingSoon")}
                  </Button>
                </CardContent>
              </Card>

              {/* Monthly Plan */}
              <Card className="relative border border-[#7257FF]/30 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#7257FF]/10 rounded-full mb-4">
                      <Brain className="h-8 w-8 text-[#7257FF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {t("subscription.plans.monthly.name")}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {t("subscription.plans.monthly.subtitle")}
                    </p>
                    <div className="text-4xl font-bold text-[#7257FF] mb-2">
                      {formatPrice(PRICING.subscription.monthly)}
                    </div>
                    <p className="text-sm text-gray-500">
                      {t("subscription.plans.monthly.period")}
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {(t("subscription.plans.monthly.features") as string[]).map(
                      (feature: string, index: number) => (
                        <div key={index} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      )
                    )}
                  </div>

                  <Button
                    disabled
                    className="w-full py-3 bg-gray-200 text-gray-500 cursor-not-allowed rounded-xl"
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    {t("subscription.comingSoon")}
                  </Button>
                </CardContent>
              </Card>

              {/* Annual Plan - Most Popular */}
              <Card className="relative border-2 border-[#7257FF] shadow-2xl scale-105 bg-gradient-to-b from-white to-purple-50">
                {/* Popular Badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <Badge className="bg-gradient-to-r from-[#7257FF] to-purple-600 text-white px-8 py-3 text-base font-bold shadow-lg">
                    <Crown className="h-5 w-5 mr-2" />
                    MAIS POPULAR
                  </Badge>
                </div>

                <CardContent className="p-8 pt-12">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                      <Star className="h-8 w-8 text-[#7257FF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {t("subscription.plans.yearly.name")}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {t("subscription.plans.yearly.subtitle")}
                    </p>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-[#7257FF]">
                        {formatPrice(CALCULATED_PRICING.yearlyMonthly)}
                      </div>
                      <p className="text-sm text-gray-500">
                        {t("subscription.plans.yearly.period")}
                      </p>
                      <div className="text-sm text-gray-500 line-through">
                        {formatPrice(PRICING.subscription.monthly)}/mês
                      </div>
                      <p className="text-xs text-[#7257FF] font-medium">
                        {t("subscription.billedAnnually")}{" "}
                        {formatPrice(PRICING.subscription.yearly)}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {(t("subscription.plans.yearly.features") as string[]).map(
                      (feature: string, index: number) => (
                        <div key={index} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-[#7257FF] flex-shrink-0" />
                          <span className="text-gray-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  <Button
                    disabled
                    className="w-full py-4 bg-gradient-to-r from-[#7257FF] to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg opacity-60 cursor-not-allowed"
                  >
                    <Clock className="h-5 w-5 mr-2" />
                    {t("subscription.comingSoon")}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Feature Comparison Table */}
            <div className="bg-gradient-to-br from-gray-50 to-[#7257FF]/5 rounded-3xl p-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#7257FF] to-blue-600 bg-clip-text text-transparent">
                  {t("subscription.comparison.title")}
                </h2>
                <p className="text-xl text-gray-600">
                  {t("subscription.comparison.subtitle")}
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                  <thead className="bg-gradient-to-r from-[#7257FF] to-blue-600 text-white">
                    <tr>
                      <th className="text-left p-6 font-semibold text-lg">
                        {t("subscription.comparison.tableHeaders.features")}
                      </th>
                      <th className="text-center p-6 font-semibold text-lg">
                        {t("subscription.comparison.tableHeaders.basic")}
                      </th>
                      <th className="text-center p-6 font-semibold text-lg">
                        {t("subscription.comparison.tableHeaders.plus")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: t("subscription.comparison.features.sos"),
                        basic: true,
                        plus: true,
                        icon: Shield,
                      },
                      {
                        name: t("subscription.comparison.features.geofencing"),
                        basic: true,
                        plus: true,
                        icon: Zap,
                      },
                      {
                        name: t("subscription.comparison.features.location"),
                        basic: true,
                        plus: true,
                        icon: Zap,
                      },
                      {
                        name: t("subscription.comparison.features.alerts"),
                        basic: true,
                        plus: true,
                        icon: Zap,
                      },
                      {
                        name: t("subscription.comparison.features.caregivers"),
                        basic: "5",
                        plus: "∞",
                        icon: Users,
                      },
                      {
                        name: t(
                          "subscription.comparison.features.fallDetection"
                        ),
                        basic: false,
                        plus: true,
                        icon: Shield,
                      },
                      {
                        name: t("subscription.comparison.features.ai"),
                        basic: false,
                        plus: true,
                        icon: Brain,
                      },
                      {
                        name: t(
                          "subscription.comparison.features.advancedAlerts"
                        ),
                        basic: false,
                        plus: true,
                        icon: Zap,
                      },
                      {
                        name: t("subscription.comparison.features.reports"),
                        basic: false,
                        plus: true,
                        icon: Zap,
                      },
                      {
                        name: t("subscription.comparison.features.support"),
                        basic: false,
                        plus: true,
                        icon: Zap,
                      },
                    ].map((feature, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                        }
                      >
                        <td className="p-6">
                          <div className="flex items-center gap-3">
                            <feature.icon className="h-5 w-5 text-gray-500" />
                            <span className="font-medium text-gray-900">
                              {feature.name}
                            </span>
                          </div>
                        </td>
                        <td className="p-6 text-center">
                          {typeof feature.basic === "string" ? (
                            <div className="flex items-center justify-center gap-1">
                              <Users className="h-4 w-4 text-gray-600" />
                              <span className="text-sm font-medium text-gray-700">
                                {feature.basic}
                              </span>
                            </div>
                          ) : feature.basic ? (
                            <Check className="h-6 w-6 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-6 w-6 text-gray-300 mx-auto" />
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {typeof feature.plus === "string" ? (
                            <div className="flex items-center justify-center gap-1">
                              <Infinity className="h-5 w-5 text-[#7257FF]" />
                              <span className="text-sm font-medium text-[#7257FF]">
                                {feature.plus}
                              </span>
                            </div>
                          ) : feature.plus ? (
                            <Check className="h-6 w-6 text-[#7257FF] mx-auto" />
                          ) : (
                            <X className="h-6 w-6 text-gray-300 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                {t("subscription.benefits.title")}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-[#7257FF]/5 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Shield className="h-16 w-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t("subscription.benefits.basic.title")}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t("subscription.benefits.basic.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-[#7257FF]/5 to-blue-50 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Brain className="h-16 w-16 text-[#7257FF] mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t("subscription.benefits.ai.title")}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t("subscription.benefits.ai.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-[#7257FF]/5 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Users className="h-16 w-16 text-orange-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t("subscription.benefits.unlimited.title")}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t("subscription.benefits.unlimited.description")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
