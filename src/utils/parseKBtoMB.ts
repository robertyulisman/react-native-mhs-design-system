const parseKBtoMB = (value: number): string => {
  // Ensure value is a number
  if (typeof value !== 'number') {
    throw new Error('Input must be a number');
  }

  // Perform the conversion
  let divideValue = value / 1_000_000; // Use underscore for better readability
  return divideValue.toFixed(2); // Format the result to 2 decimal places
};
export default parseKBtoMB;
