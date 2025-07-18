"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Globe, ExternalLink } from "lucide-react"
import { useTranslations, type Language } from "@/lib/i18n"

interface ContactSectionProps {
  lang: Language
}

export function ContactSection({ lang }: ContactSectionProps) {
  const { t } = useTranslations(lang)

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-xl text-gray-300 mb-12">{t("contact.subtitle")}</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 text-[#7257FF] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{t("contact.email")}</h3>
                <Button
                  variant="outline"
                  className="border-[#7257FF] text-[#7257FF] hover:bg-[#7257FF] hover:text-white bg-transparent"
                  onClick={() => window.open("mailto:contato@prote-ja.com")}
                >
                  contato@prote-ja.com
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-[#7257FF] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{t("contact.website")}</h3>
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                  disabled
                >
                  www.prote-ja.com
                  <span className="ml-2 text-xs">({t("contact.development")})</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
