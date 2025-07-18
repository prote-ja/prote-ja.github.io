import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Rocket } from "lucide-react";
import { useTranslationsContext } from "@/lib/i18n";

export function StageSection() {
  const { t } = useTranslationsContext();

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("stage.title")}
            </h2>
            <p className="text-xl text-gray-600">{t("stage.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Conquistas</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>{t("stage.prototypes")}</li>
                  <li>{t("stage.testing")}</li>
                  <li>{t("stage.feedback")}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t("stage.priorities")}
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>{t("stage.hardware")}</li>
                  <li>{t("stage.algorithm")}</li>
                  <li>{t("stage.app")}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardContent className="p-6 text-center">
                <Rocket className="h-12 w-12 text-[#7257FF] mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Próximos Passos
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>{t("stage.certification")}</li>
                  <li>{t("stage.ip")}</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-[#7257FF] bg-gradient-to-r from-purple-50 to-purple-100">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("vision.title")}
              </h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                {t("vision.description")}
              </p>
              <p className="text-lg font-medium text-[#7257FF]">
                {t("vision.mission")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
