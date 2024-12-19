function getDarkColorPercentage(hexColor: string): number {
  // Remove the leading "#" if present
  const color = hexColor.startsWith('#') ? hexColor.slice(1) : hexColor;

  // Convert the hexadecimal color to RGB values
  const red = parseInt(color.slice(0, 2), 16);
  const green = parseInt(color.slice(2, 4), 16);
  const blue = parseInt(color.slice(4, 6), 16);

  // Calculate the dark percentage
  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
  const darkPercentage = (1 - brightness / 255) * 100;

  return Math.round(darkPercentage);
}

export default getDarkColorPercentage;
