import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Shield,
  Heart,
  Award,
  Battery,
  Users,
  Watch,
  Wifi,
  Smartphone,
  Brain,
  Handshake,
} from "lucide-react";

import { useEffect } from "react";
import { Link } from "react-router";
import { getStoredLanguage, useTranslationsContext } from "./lib/i18n";

export default function HomePage() {
  const {
    t,
    lang: currentLang,
    setLang: setCurrentLang,
  } = useTranslationsContext();

  // Load stored language on mount
  useEffect(() => {
    setCurrentLang(getStoredLanguage());
  }, []);

  const solutions = [
    {
      icon: Watch,
      title: t("solution.bracelet.title") as string,
      description: t("solution.bracelet.description") as string,
      image: "/placeholder.svg?height=300&width=400",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Wifi,
      title: t("solution.totem.title") as string,
      description: t("solution.totem.description") as string,
      image: "/placeholder.svg?height=300&width=400",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Smartphone,
      title: t("solution.platform.title") as string,
      description: t("solution.platform.description") as string,
      image: "/placeholder.svg?height=300&width=400",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Brain,
      title: t("solution.ai.title") as string,
      description: t("solution.ai.description") as string,
      image: "/placeholder.svg?height=300&width=400",
      color: "from-[#7257FF] to-purple-600",
    },
  ];

  const partners = [
    {
      name: "UTFPR",
      description: "Universidade Tecnológica Federal do Paraná",
      logo: "/placeholder.svg?height=80&width=200&text=UTFPR",
    },
    {
      name: "Campus Mobile",
      description: "1º Lugar Nacional 2025",
      logo: "/placeholder.svg?height=80&width=200&text=Campus+Mobile",
    },
    {
      name: "APA Toledo",
      description: "Parceiro de Testes e Validação",
      logo: "/placeholder.svg?height=80&width=200&text=APA+Toledo",
    },
    {
      name: "Petrobras",
      description: "2º Lugar Hackathon IA",
      logo: "/placeholder.svg?height=80&width=200&text=Petrobras",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation currentLang={currentLang} onLanguageChange={setCurrentLang} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#7257FF] via-[#5d47e6] to-[#4c3bcc]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-blue-300/20 rounded-full blur-lg animate-bounce"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-40 left-20 w-20 h-20 bg-white/15 rounded-full blur-lg animate-bounce"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.05%3E%3Ccircle cx=30 cy=30 r=1/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        </div>

        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="text-white">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
                  <Shield className="h-5 w-5 text-white" />
                  <span className="text-sm font-medium">{t("hero.badge")}</span>
                </div>

                {/* Main Content */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  {t("hero.title")}
                </h1>

                <p className="text-xl md:text-2xl text-white/90 mb-6 font-medium leading-relaxed">
                  {t("hero.subtitle")}
                </p>

                <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-2xl">
                  {t("hero.description")}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 mb-16">
                  <Link to="/products">
                    <Button
                      size="lg"
                      className="bg-white text-[#7257FF] hover:bg-white/90 px-10 py-6 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 font-semibold"
                    >
                      {t("hero.cta")}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>

                  <Link to="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg rounded-full backdrop-blur-md transition-all duration-300 font-semibold bg-transparent"
                    >
                      {t("hero.contact")}
                    </Button>
                  </Link>
                </div>

                {/* Stats - Fixed line breaks */}
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="flex flex-col items-center mb-2">
                      <Battery className="h-8 w-8 text-white/80 mb-2" />
                      <span className="text-3xl font-bold">
                        {t("hero.stats.battery")}
                      </span>
                    </div>
                    <p className="text-white/70 text-sm">
                      {t("hero.stats.batteryLabel")}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex flex-col items-center mb-2">
                      <Users className="h-8 w-8 text-white/80 mb-2" />
                      <span className="text-3xl font-bold">
                        {t("hero.stats.users")}
                      </span>
                    </div>
                    <p className="text-white/70 text-sm">
                      {t("hero.stats.usersLabel")}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex flex-col items-center mb-2">
                      <Award className="h-8 w-8 text-white/80 mb-2" />
                      <span className="text-3xl font-bold">
                        {t("hero.stats.award")}
                      </span>
                    </div>
                    <p className="text-white/70 text-sm">
                      {t("hero.stats.awardLabel")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content - Product Showcase */}
              <div className="relative">
                <div className="relative">
                  {/* Main Product Image */}
                  <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                    <img
                      src="/placeholder.svg?height=500&width=600"
                      alt="Ecossistema ProteJÁ"
                      className="w-full h-96 object-cover rounded-2xl"
                    />

                    {/* Floating Feature Cards */}
                    <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-gray-800">
                          Monitoramento 24/7
                        </span>
                      </div>
                    </div>

                    <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20">
                      <div className="flex items-center gap-3">
                        <Heart className="h-4 w-4 text-red-500" />
                        <span className="text-sm font-medium text-gray-800">
                          Cuidado Humano
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-blue-300/20 rounded-3xl blur-3xl -z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave - Fixed for better responsiveness */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-16 sm:h-20 md:h-24 fill-gray-50"
            preserveAspectRatio="none"
          >
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
          </svg>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%237257FF fillOpacity=0.03%3E%3Ccircle cx=30 cy=30 r=1/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#7257FF] to-blue-600 bg-clip-text text-transparent">
                  {t("solution.title")}
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t("solution.subtitle")}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {solutions.map((solution, index) => (
                <Card
                  key={index}
                  className="group border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-sm overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={solution.image || "/placeholder.svg"}
                        alt={solution.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${solution.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                      />

                      {/* Icon */}
                      <div className="absolute top-6 left-6">
                        <div
                          className={`p-4 bg-gradient-to-r ${solution.color} rounded-2xl shadow-lg`}
                        >
                          <solution.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {solution.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-br from-[#7257FF]/10 via-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#7257FF]/10 rounded-full mb-6">
                <Handshake className="h-5 w-5 text-[#7257FF]" />
                <span className="text-sm font-medium text-[#7257FF]">
                  {t("partners.badge")}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#7257FF] to-blue-600 bg-clip-text text-transparent">
                {t("partners.title")}
              </h2>
              <p className="text-xl text-gray-600">{t("partners.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/90 backdrop-blur-sm"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        className="h-16 w-auto mx-auto object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {partner.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
