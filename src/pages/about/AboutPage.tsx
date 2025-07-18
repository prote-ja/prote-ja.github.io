import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Trophy,
  Lightbulb,
  Users,
  Target,
  Rocket,
  CheckCircle,
  Heart,
  TestTube,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { useTranslationsContext } from "@/lib/i18n";

export default function AboutPage() {
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

        <div className="container mx-auto px-6 relative z-10 pb-12 md:pb-18">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
              <Heart className="h-5 w-5 text-white" />
              <span className="text-sm font-medium">{t("about.badge")}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t("about.title")}
            </h1>
            <p className="text-xl text-white/90 mb-4 font-medium leading-relaxed">
              {t("about.subtitle")}
            </p>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              {t("about.description")}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 ">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-16 sm:h-20 md:h-24 fill-white"
            preserveAspectRatio="none"
          >
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
          </svg>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t("about.origin.title")}
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  {t("about.origin.subtitle")}
                </p>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>{t("about.origin.story1")}</p>
                  <p>{t("about.origin.story2")}</p>
                  <p className="font-medium text-[#7257FF]">
                    {t("about.origin.achievement")}
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-gray-200 shadow-2xl">
                  <img
                    src="/placeholder.svg?height=400&width=500&text=Fundadores+ProteJÁ"
                    alt="Fundadores da ProteJÁ"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-purple-100 hover:shadow-lg transition-shadow bg-gradient-to-br from-purple-50 to-white">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-[#7257FF] mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {t("about.cards.personal.title")}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t("about.cards.personal.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-100 hover:shadow-lg transition-shadow bg-gradient-to-br from-purple-50 to-white">
                <CardContent className="p-6 text-center">
                  <Lightbulb className="h-12 w-12 text-[#7257FF] mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {t("about.cards.insight.title")}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t("about.cards.insight.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-100 hover:shadow-lg transition-shadow bg-gradient-to-br from-purple-50 to-white">
                <CardContent className="p-6 text-center">
                  <Trophy className="h-12 w-12 text-[#7257FF] mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {t("about.cards.recognition.title")}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t("about.cards.recognition.description")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* APA Testing Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#7257FF]/10 rounded-full mb-6">
                <TestTube className="h-5 w-5 text-[#7257FF]" />
                <span className="text-sm font-medium text-[#7257FF]">
                  {t("about.apa.badge")}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("about.apa.title")}
              </h2>
              <p className="text-xl text-gray-600">{t("about.apa.subtitle")}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-gray-200 shadow-2xl">
                  <img
                    src="/placeholder.svg?height=400&width=500&text=Testes+na+APA+Toledo"
                    alt="Testes na APA Toledo"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
              </div>

              <div>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>{t("about.apa.story1")}</p>
                  <p>{t("about.apa.story2")}</p>
                  <p>{t("about.apa.story3")}</p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#7257FF] mb-2">
                      5
                    </div>
                    <p className="text-sm text-gray-600">
                      {t("about.apa.users")}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#7257FF] mb-2">
                      100%
                    </div>
                    <p className="text-sm text-gray-600">
                      {t("about.apa.feedback")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Stage Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("about.stage.title")}
              </h2>
              <p className="text-xl text-gray-600">
                {t("about.stage.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {t("about.stage.achievements.title")}
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>{t("about.stage.achievements.prototypes")}</li>
                    <li>{t("about.stage.achievements.testing")}</li>
                    <li>{t("about.stage.achievements.feedback")}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {t("about.stage.priorities.title")}
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>{t("about.stage.priorities.hardware")}</li>
                    <li>{t("about.stage.priorities.algorithm")}</li>
                    <li>{t("about.stage.priorities.app")}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardContent className="p-6 text-center">
                  <Rocket className="h-12 w-12 text-[#7257FF] mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {t("about.stage.next.title")}
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>{t("about.stage.next.certification")}</li>
                    <li>{t("about.stage.next.ip")}</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-[#7257FF] bg-gradient-to-r from-purple-50 to-purple-100">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("about.stage.vision.title")}
                </h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  {t("about.stage.vision.description")}
                </p>
                <p className="text-lg font-medium text-[#7257FF]">
                  {t("about.stage.vision.mission")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#7257FF] to-blue-600 bg-clip-text text-transparent">
                {t("about.founders.title")}
              </h2>
              <p className="text-xl text-gray-600">
                {t("about.founders.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-0 shadow-2xl bg-white/70 backdrop-blur-md hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img
                      src="/placeholder.svg?height=200&width=200&text=Rafael+Meneses"
                      alt="Rafael Farias Meneses"
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#7257FF]/20"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t("about.founders.rafael.name")}
                  </h3>
                  <p className="text-[#7257FF] font-medium mb-4">
                    {t("about.founders.rafael.role")}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {t("about.founders.rafael.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-2xl bg-white/70 backdrop-blur-md hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img
                      src="/placeholder.svg?height=200&width=200&text=Reinaldo+Neto"
                      alt="Reinaldo Kaminski Neto"
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#7257FF]/20"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t("about.founders.reinaldo.name")}
                  </h3>
                  <p className="text-[#7257FF] font-medium mb-4">
                    {t("about.founders.reinaldo.role")}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {t("about.founders.reinaldo.description")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#7257FF] via-[#5d47e6] to-[#4c3bcc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("about.cta.title")}
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t("about.cta.description")}
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-[#7257FF] hover:bg-white/90 px-10 py-6 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                {t("about.cta.button")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
