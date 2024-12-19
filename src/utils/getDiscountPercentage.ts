function getDiscountPercentage(
  costValue: number,
  amountDisc: number
): number | null {
  if (costValue <= 0) {
    console.warn('Cost value must be greater than zero.');
    return null; // Return null if costValue is zero or negative
  }

  const discountPercentage = (amountDisc / costValue) * 100;
  return parseFloat(discountPercentage.toFixed(2)); // Return the percentage rounded to two decimal places
}

export default getDiscountPercentage;
