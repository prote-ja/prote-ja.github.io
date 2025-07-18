import { Card, CardContent } from "@/components/ui/card";
import { Watch, Wifi, Brain, ArrowRight } from "lucide-react";
import { useTranslationsContext } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export function ProductIntroSection() {
  const { t } = useTranslationsContext();

  const features = [
    {
      icon: Watch,
      title: t("product_intro.bracelet.title") as string,
      description: t("product_intro.bracelet.description") as string,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Wifi,
      title: t("product_intro.totem.title") as string,
      description: t("product_intro.totem.description") as string,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Brain,
      title: t("product_intro.ai.title") as string,
      description: t("product_intro.ai.description") as string,
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-[#7257FF]/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#7257FF] to-blue-600 bg-clip-text text-transparent">
                {t("product_intro.title")}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("product_intro.subtitle")}
            </p>
          </div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Card className="border-0 shadow-2xl bg-white/70 backdrop-blur-md overflow-hidden">
                    <CardContent className="p-0">
                      <img
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        className="w-full h-80 object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>

                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-[#7257FF] to-blue-600 rounded-2xl">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/products">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#7257FF] to-blue-600 hover:from-[#7257FF]/90 hover:to-blue-600/90 text-white px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Ver todos os produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
