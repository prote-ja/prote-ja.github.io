"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Cpu, Users, MessageSquare, Zap } from "lucide-react"
import { useTranslations, type Language } from "@/lib/i18n"

interface DifferentiatorsProps {
  lang: Language
}

export function DifferentiatorsSection({ lang }: DifferentiatorsProps) {
  const { t } = useTranslations(lang)

  const differentiators = [
    {
      icon: Brain,
      title: t("differentiators.predictive.title"),
      description: t("differentiators.predictive.description"),
    },
    {
      icon: Cpu,
      title: t("differentiators.hardware.title"),
      description: t("differentiators.hardware.description"),
    },
    {
      icon: Users,
      title: t("differentiators.shared.title"),
      description: t("differentiators.shared.description"),
    },
    {
      icon: MessageSquare,
      title: t("differentiators.accessible.title"),
      description: t("differentiators.accessible.description"),
    },
    {
      icon: Zap,
      title: t("differentiators.scalable.title"),
      description: t("differentiators.scalable.description"),
    },
  ]

  return (
    <section id="differentiators" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("differentiators.title")}</h2>
            <p className="text-xl text-gray-600">{t("differentiators.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <Card key={index} className="border-purple-100 hover:shadow-lg transition-all hover:border-[#7257FF]">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-[#7257FF] mb-4" />
                  <CardTitle className="text-xl font-bold text-gray-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
