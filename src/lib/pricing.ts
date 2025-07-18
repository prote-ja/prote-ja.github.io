// Pricing configuration - easily changeable
export const PRICING = {
  products: {
    bracelet: 227.9,
    totem: 167.9,
    kit: 379.0, // This will be used to calculate discount
  },
  subscription: {
    monthly: 19.9,
    yearly: 199.0, // This gives 16.60 per month
  },
} as const

// Calculated values
export const CALCULATED_PRICING = {
  // Individual products total
  individualTotal: PRICING.products.bracelet + PRICING.products.totem,
  // Kit discount (hardware savings)
  kitDiscount: PRICING.products.bracelet + PRICING.products.totem - PRICING.products.kit,
  // Yearly subscription value (what you get free with kit)
  yearlySubscriptionValue: PRICING.subscription.monthly * 12,
  // Total kit savings (hardware + subscription)
  totalKitSavings:
    PRICING.products.bracelet + PRICING.products.totem - PRICING.products.kit + PRICING.subscription.monthly * 12,
  // Yearly subscription monthly equivalent
  yearlyMonthly: PRICING.subscription.yearly / 12,
  // Yearly savings
  yearlySavings: PRICING.subscription.monthly * 12 - PRICING.subscription.yearly,
  // Yearly savings percentage
  yearlySavingsPercent: Math.round(
    ((PRICING.subscription.monthly * 12 - PRICING.subscription.yearly) / (PRICING.subscription.monthly * 12)) * 100,
  ),
} as const

// Formatting helper
export const formatPrice = (price: number): string => {
  return `R$ ${price.toFixed(2).replace(".", ",")}`
}
