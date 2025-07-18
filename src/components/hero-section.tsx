"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Heart, Award, Battery, Users } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
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
                <span className="text-sm font-medium">Tecnologia que salva vidas</span>
              </div>

              {/* Main Content */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                Protegendo quem importa, onde quer que estejam
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-6 font-medium leading-relaxed">
                Soluções inteligentes, acessíveis e preventivas para pessoas em situação de vulnerabilidade
              </p>

              <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-2xl">
                Combinamos hardware proprietário de alta autonomia, inteligência artificial preditiva e um modelo de
                cuidado descentralizado para prevenir quedas e melhorar a qualidade de vida.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <Link href="/products">
                  <Button
                    size="lg"
                    className="bg-white text-[#7257FF] hover:bg-white/90 px-10 py-6 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 font-semibold"
                  >
                    Conheça nossa solução
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg rounded-full backdrop-blur-md transition-all duration-300 font-semibold bg-transparent"
                  >
                    Entre em contato
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Battery className="h-8 w-8 text-white/80 mr-2" />
                    <span className="text-3xl font-bold">3 meses</span>
                  </div>
                  <p className="text-white/70 text-sm">de bateria</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="h-8 w-8 text-white/80 mr-2" />
                    <span className="text-3xl font-bold">5 usuários</span>
                  </div>
                  <p className="text-white/70 text-sm">testaram nosso MVP</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="h-8 w-8 text-white/80 mr-2" />
                    <span className="text-3xl font-bold">1º lugar</span>
                  </div>
                  <p className="text-white/70 text-sm">Campus Mobile 2025</p>
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
                      <span className="text-sm font-medium text-gray-800">Monitoramento 24/7</span>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20">
                    <div className="flex items-center gap-3">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span className="text-sm font-medium text-gray-800">Cuidado Humano</span>
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

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>
    </section>
  )
}
