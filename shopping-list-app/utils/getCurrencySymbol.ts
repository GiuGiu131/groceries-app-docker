export const getCurrencySymbol = () => {
  try {
    const locale = Intl.DateTimeFormat().resolvedOptions().locale;

    if (locale.includes("GB")) return "£";
    if (locale.includes("US")) return "$";
    if (locale.includes("EU")) return "€";
    // Add more as needed

    return "$"; // default
  } catch {
    return "$"; // fallback default
  }
};
