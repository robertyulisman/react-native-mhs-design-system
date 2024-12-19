import type { createTransparencyObject } from './helper';

/**
 * Define the structure for color shades
 *
 */
interface ColorShades {
  500: string;
  400: string;
  300: string;
  200: string;
  100: string;
  50: string;
}

/**
 * Define the structure for color additional shades
 *
 */
interface ColorShadesAdditional {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  1000: string;
}

/**
 * Define the structure for the COLORS object
 *
 */
interface Colors {
  primary: ColorShades;
  secondary: ColorShades;
  purple: ColorShades;
  yellow: ColorShades;
  warning: ColorShades;
  success: ColorShades;
  error: ColorShades;
  additional: ColorShadesAdditional;
  dark: ColorShades;
  light: ColorShades;
  blackTransparent: ReturnType<typeof createTransparencyObject>; // Assuming createTransparencyObject returns a specific type
  whiteTransparent: ReturnType<typeof createTransparencyObject>;
}

/**
 * Define the structure for the COLORS_PALETTE object
 *
 */
interface ColorsPalette {
  weak: string;
  veryWeak: string;
  soSo: string;
  strong: string;
  unbelievablyStrong2: string;
  unbelievablyStrong3: string;
  unbelievablyStrong4: string;
  fair: string;
}

/**
 * Define the structure for font styles
 *
 */
interface FontStyle {
  fontFamily: string;
  fontSize: number | undefined; // Allow undefined
  lineHeight: number | undefined; // Allow undefined
  letterSpacing: number; // Assuming letterSpacing should remain a number
}

/**
 * Define the structure for the FONTS object
 *
 */
interface Fonts {
  heading1: FontStyle;
  heading1Medium: FontStyle;
  heading2: FontStyle;
  heading2ExtraBold: FontStyle;
  heading3: FontStyle;
  heading4: FontStyle;
  label1: FontStyle;
  label2: FontStyle;
  label2Medium: FontStyle;
  label3: FontStyle;
  label3Medium: FontStyle;
  body0: FontStyle;
  body1: FontStyle;
  body2: FontStyle;
  body3: FontStyle;
}

/**
 * Define the main export types
 *
 */
export type Theme = {
  SIZE: {
    width: number;
    height: number;
  };
  COLORS: Colors;
  COLORS_PALETTE: ColorsPalette;
  FONTS: Fonts;
};
