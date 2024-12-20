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
  /**
   * Primary color shades.
   *
   * @property {string} 500 - Primary color shade: '#E31320'.
   * @property {string} 400 - Primary color shade: '#EE3440'.
   * @property {string} 300 - Primary color shade: '#F15D66'.
   * @property {string} 200 - Primary color shade: '#F5858C'.
   * @property {string} 100 - Primary color shade: '#F8AEB2'.
   * @property {string} 50 - Primary color shade: '#FCD6D9'.
   */
  primary: ColorShades;

  /**
   * Secondary color shades.
   *
   * @property {string} 500 - Secondary color shade: '#2C76CE'.
   * @property {string} 400 - Secondary color shade: '#4C8DD9'.
   * @property {string} 300 - Secondary color shade: '#70A3E0'.
   * @property {string} 200 - Secondary color shade: '#94BAE8'.
   * @property {string} 100 - Secondary color shade: '#B8D1F0'.
   * @property {string} 50 - Secondary color shade: '#DBE8F7'.
   */
  secondary: ColorShades;

  /**
   * Purple color shades.
   *
   * @property {string} 500 - Purple color shade: '#682DE5'.
   * @property {string} 400 - Purple color shade: '#8150E9'.
   * @property {string} 300 - Purple color shade: '#9A73EE'.
   * @property {string} 200 - Purple color shade: '#B396F2'.
   * @property {string} 100 - Purple color shade: '#CDB9F6'.
   * @property {string} 50 - Purple color shade: '#E6DCFB'.
   */
  purple: ColorShades;

  /**
   * Yellow color shades.
   *
   * @property {string} 500 - Yellow color shade: '#FFE600'.
   * @property {string} 400 - Yellow color shade: '#FFEA29'.
   * @property {string} 300 - Yellow color shade: '#FFED53'.
   * @property {string} 200 - Yellow color shade: '#FFF17C'.
   * @property {string} 100 - Yellow color shade: '#FFF4A6'.
   * @property {string} 50 - Yellow color shade: '#FFF8CF'.
   */
  yellow: ColorShades;

  /**
   * Warning color shades.
   *
   * @property {string} 500 - Warning color shade: '#FCA311'.
   * @property {string} 400 - Warning color shade: '#FDB239'.
   * @property {string} 300 - Warning color shade: '#FDC260'.
   * @property {string} 200 - Warning color shade: '#FED188'.
   * @property {string} 100 - Warning color shade: '#FEE0B0'.
   * @property {string} 50 - Warning color shade: '#FFF0D7'.
   */
  warning: ColorShades;

  /**
   * Success color shades.
   *
   * @property {string} 500 - Success color shade: '#42A444'.
   * @property {string} 400 - Success color shade: '#5AB55C'.
   * @property {string} 300 - Success color shade: '#84C886'.
   * @property {string} 200 - Success color shade: '#B2DCB2'.
   * @property {string} 100 - Success color shade: '#D5ECD5'.
   * @property {string} 50 - Success color shade: '#F4FAF5'.
   */
  success: ColorShades;

  /**
   * Error color shades.
   *
   * @property {string} 500 - Error color shade: '#E31320'.
   * @property {string} 400 - Error color shade: '#EE3440'.
   * @property {string} 300 - Error color shade: '#F15D66'.
   * @property {string} 200 - Error color shade: '#F5858C'.
   * @property {string} 100 - Error color shade: '#F8AEB2'.
   * @property {string} 50 - Error color shade: '#FCD6D9'.
   */
  error: ColorShades;

  /**
   * Additional color shades.
   *
   * @property {string} 100 - Additional color shade: '#17AAA5'.
   * @property {string} 200 - Additional color shade: '#FCA311'.
   * @property {string} 300 - Additional color shade: '#F15679'.
   * @property {string} 400 - Additional color shade: '#682DE5'.
   * @property {string} 500 - Additional color shade: '#17A1FA'.
   * @property {string} 600 - Additional color shade: '#FCA311'.
   * @property {string} 700 - Additional color shade: '#5AB55C'.
   * @property {string} 800 - Additional color shade: '#458039'.
   * @property {string} 900 - Additional color shade: '#FFE1D7'.
   * @property {string} 1000 - Additional color shade: '#F66733'.
   */
  additional: ColorShadesAdditional;

  /**
   * Dark color shades.
   *
   * @property {string} 500 - Dark color shade: '#16191D'.
   * @property {string} 400 - Dark color shade: '#5C6470'.
   * @property {string} 300 - Dark color shade: '#808893'.
   * @property {string} 200 - Dark color shade: '#A4AAB2'.
   * @property {string} 100 - Dark color shade: '#C0C4C9'.
   * @property {string} 50 - Dark color shade: '#D2D6DA'.
   */
  dark: ColorShades;

  /**
   * Light color shades.
   *
   * @property {string} 500 - Light color shade: '#DEE4E7'.
   * @property {string} 400 - Light color shade: '#E4E9EC'.
   * @property {string} 300 - Light color shade: '#EAEEF1'.
   * @property {string} 200 - Light color shade: '#EFF3F5'.
   * @property {string} 100 - Light color shade: '#F8FAFB'.
   * @property {string} 50 - Light color shade: '#FFFFFF'.
   */
  light: ColorShades;

  /**
   * Black color with transparency.
   * @returns {ReturnType<typeof createTransparencyObject>}
   */
  blackTransparent: ReturnType<typeof createTransparencyObject>;

  /**
   * White color with transparency.
   * @returns {ReturnType<typeof createTransparencyObject>}
   */
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
