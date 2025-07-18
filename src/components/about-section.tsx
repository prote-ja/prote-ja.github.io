"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Lightbulb, Users } from "lucide-react"
import { useTranslations, type Language } from "@/lib/i18n"

interface AboutSectionProps {
  lang: Language
}

export function AboutSection({ lang }: AboutSectionProps) {
  const { t } = useTranslations(lang)

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("about.title")}</h2>
            <p className="text-xl text-gray-600">{t("about.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-[#7257FF] mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Origem Pessoal</h3>
                <p className="text-gray-600 text-sm">Fundada por experiências reais de perda e cuidado familiar</p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Lightbulb className="h-12 w-12 text-[#7257FF] mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Insight Inovador</h3>
                <p className="text-gray-600 text-sm">Mudança de detecção reativa para prevenção preditiva</p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Trophy className="h-12 w-12 text-[#7257FF] mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Reconhecimento</h3>
                <p className="text-gray-600 text-sm">1º lugar nacional no Campus Mobile 2025</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>{t("about.story")}</p>
            <p>{t("about.insight")}</p>
            <p className="font-medium text-[#7257FF]">{t("about.achievement")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
