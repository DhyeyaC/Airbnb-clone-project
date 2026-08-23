export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatCurrency(amount: number, currency = "₹") {
  return `${currency}${amount.toLocaleString("en-IN")}`;
}

export function formatRating(rating: number) {
  return rating.toFixed(2);
}
