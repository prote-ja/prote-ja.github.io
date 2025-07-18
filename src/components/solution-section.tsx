import { Card, CardContent } from "@/components/ui/card";
import { Watch, Wifi, Smartphone, Brain } from "lucide-react";

export function SolutionSection() {
  const solutions = [
    {
      icon: Watch,
      title: "Pulseira Inteligente",
      description:
        "Sensores inerciais (acelerômetro e giroscópio) monitoram movimentos 24/7 com até 3 meses de autonomia de bateria.",
      image: "/placeholder.svg?height=300&width=400",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Wifi,
      title: "Totem de Comunicação Local",
      description:
        "Garante conectividade com a nuvem mesmo sem Wi-Fi doméstico, mantendo a família sempre conectada.",
      image: "/placeholder.svg?height=300&width=400",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Smartphone,
      title: "Plataforma Multi-Cuidador",
      description:
        "Interface web/mobile com alertas em tempo real via WhatsApp, SMS, email e app. Múltiplos cuidadores podem monitorar uma pulseira.",
      image: "/placeholder.svg?height=300&width=400",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Brain,
      title: "IA Preditiva (em desenvolvimento)",
      description:
        "Algoritmo personalizado que aprende padrões únicos de movimento e antecipa comportamentos de risco.",
      image: "/placeholder.svg?height=300&width=400",
      color: "from-[#7257FF] to-purple-600",
    },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      <div
        className={
          'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%237257FF" fillOpacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-50'
        }
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#7257FF] to-blue-600 bg-clip-text text-transparent">
                Como o ProteJÁ Funciona
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Um ecossistema completo de cuidado preventivo
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
                        {solution.icon({ className: "h-8 w-8 text-white" })}
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
  );
}
