function createOpacityColor(hexColor: string, opacity: number): string {
  // Convert the hexcolor to RGB values
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  // Calculate the opacity value
  const opacityValue = Math.round(opacity * 255);

  // Construct the RGBA color string
  return `rgba(${r}, ${g}, ${b}, ${opacityValue / 255})`;
}

export default createOpacityColor;
