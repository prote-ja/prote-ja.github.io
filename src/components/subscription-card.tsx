import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Crown } from "lucide-react";

interface SubscriptionCardProps {
  plan: {
    name: string;
    price: string;
    originalPrice?: string;
    features: string[];
    isPopular?: boolean;
  };
  onSubscribe: () => void;
  subscribeText: string;
}

export function SubscriptionCard({
  plan,
  onSubscribe,
  subscribeText,
}: SubscriptionCardProps) {
  return (
    <Card
      className={`relative transition-all duration-300 hover:shadow-xl ${
        plan.isPopular
          ? "border-2 border-gradient-to-r from-purple-500 to-pink-500 shadow-lg scale-105"
          : "border border-gray-200 hover:scale-105"
      }`}
    >
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1">
            <Crown className="h-3 w-3 mr-1" />
            Mais Popular
          </Badge>
        </div>
      )}

      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl font-bold text-gray-900">
          {plan.name}
        </CardTitle>
        <div className="space-y-1">
          <div className="text-3xl font-bold text-purple-600">{plan.price}</div>
          {plan.originalPrice && (
            <div className="text-sm text-gray-500 line-through">
              {plan.originalPrice}
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-3">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <Button
          onClick={onSubscribe}
          className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
            plan.isPopular
              ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              : "bg-purple-100 text-purple-700 hover:bg-purple-200"
          }`}
        >
          {subscribeText}
        </Button>
      </CardContent>
    </Card>
  );
}
