export default function convertToCurrency(input, currency = "ZAR") {
  const ZARrand = new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: currency,
  });
  try {
    return ZARrand.format(input);
  } catch (error) {
    throw new Error(`Error displaying product price: ${error.message}`);
  }
}
