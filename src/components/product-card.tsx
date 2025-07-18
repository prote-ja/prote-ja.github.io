import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import { useTranslationsContext } from "@/lib/i18n";

interface ProductCardProps {
  product: {
    name: string;
    description: string;
    features: string[];
    price: string;
    image?: string;
    isPopular?: boolean;
  };
  onSubscribe: () => void;
}

export function ProductCard({ product, onSubscribe }: ProductCardProps) {
  const { t } = useTranslationsContext();

  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
        product.isPopular
          ? "border-2 border-[#7257FF]/30 shadow-xl"
          : "border border-gray-200"
      }`}
    >
      {product.isPopular && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-gradient-to-r from-[#7257FF] to-blue-600 text-white">
            <Star className="h-3 w-3 mr-1" />
            Popular
          </Badge>
        </div>
      )}

      {product.image && (
        <div className="relative overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold text-gray-900">
          {product.name}
        </CardTitle>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-3">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-gray-100">
          <div className="text-3xl font-bold text-[#7257FF] mb-4">
            {product.price}
          </div>
          <Button
            onClick={onSubscribe}
            className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
              product.isPopular
                ? "bg-gradient-to-r from-[#7257FF] to-blue-600 hover:from-[#7257FF] hover:to-blue-700 text-white shadow-lg hover:shadow-xl"
                : "bg-purple-100 text-purple-700 hover:bg-purple-200"
            }`}
          >
            {t("products.subscribe")}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
