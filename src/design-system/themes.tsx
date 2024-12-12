import { Dimensions } from 'react-native';
import { createFontStyle, createTransparencyObject, opacities } from './helper';

const { width, height } = Dimensions.get('screen');

// Define the structure for color shades
interface ColorShades {
  500: string;
  400: string;
  300: string;
  200: string;
  100: string;
  50: string;
}

// Define the structure for the COLORS object
interface Colors {
  primary: ColorShades;
  secondary: ColorShades;
  purple: ColorShades;
  yellow: ColorShades;
  warning: ColorShades;
  success: ColorShades;
  error: ColorShades;
  additional: {
    [key: number]: string; // Allow additional numeric keys
  };
  dark: ColorShades;
  light: ColorShades;
  blackTransparent: ReturnType<typeof createTransparencyObject>; // Assuming createTransparencyObject returns a specific type
  whiteTransparent: ReturnType<typeof createTransparencyObject>;
}

// Define the structure for the COLORS_PALETTE object
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

// Define the structure for font styles
interface FontStyle {
  fontFamily: string;
  fontSize: number | undefined; // Allow undefined
  lineHeight: number | undefined; // Allow undefined
  letterSpacing: number; // Assuming letterSpacing should remain a number
}
// Define the structure for the FONTS object
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

// Define the main export types
export type Theme = {
  SIZE: {
    width: number;
    height: number;
  };
  COLORS: Colors;
  COLORS_PALETTE: ColorsPalette;
  FONTS: Fonts;
};

// Example of how to use the defined types
export const SIZE: Theme['SIZE'] = {
  width,
  height,
};

export const COLORS: Theme['COLORS'] = {
  primary: {
    500: '#E31320',
    400: '#EE3440',
    300: '#F15D66',
    200: '#F5858C',
    100: '#F8AEB2',
    50: '#FCD6D9',
  },

  secondary: {
    500: '#2C76CE',
    400: '#4C8DD9',
    300: '#70A3E0',
    200: '#94BAE8',
    100: '#B8D1F0',
    50: '#DBE8F7',
  },

  purple: {
    500: '#682DE5',
    400: '#8150E9',
    300: '#9A73EE',
    200: '#B396F2',
    100: '#CDB9F6',
    50: '#E6DCFB',
  },

  yellow: {
    500: '#FFE600',
    400: '#FFEA29',
    300: '#FFED53',
    200: '#FFF17C',
    100: '#FFF4A6',
    50: '#FFF8CF',
  },

  warning: {
    500: '#FCA311',
    400: '#FDB239',
    300: '#FDC260',
    200: '#FED188',
    100: '#FEE0B0',
    50: '#FFF0D7',
  },

  success: {
    500: '#42A444',
    400: '#5AB55C',
    300: '#84C886',
    200: '#B2DCB2',
    100: '#D5ECD5',
    50: '#F4FAF5',
  },

  error: {
    500: '#E31320',
    400: '#EE3440',
    300: '#F15D66',
    200: '#F5858C',
    100: '#F8AEB2',
    50: '#FCD6D9',
  },

  additional: {
    100: '#17AAA5',
    200: '#FCA311',
    300: '#F15679',
    400: '#682DE5',
    500: '#17A1FA',
    600: '#FCA311',
    700: '#5AB55C',
    800: '#458039',
    900: '#FFE1D7',
    1000: '#F66733',
  },

  dark: {
    500: '#16191D',
    400: '#5C6470',
    300: '#808893',
    200: '#A4AAB2',
    100: '#C0C4C9',
    50: '#D2D6DA',
  },
  light: {
    500: '#DEE4E7',
    400: '#E4E9EC',
    300: '#EAEEF1',
    200: '#EFF3F5',
    100: '#F8FAFB',
    50: '#FFFFFF',
  },
  blackTransparent: createTransparencyObject('0, 0, 0', opacities),
  whiteTransparent: createTransparencyObject('255, 255, 255', opacities),
};

export const COLORS_PALETTE: Theme['COLORS_PALETTE'] = {
  weak: '#097C50',
  veryWeak: '#1C894C',
  soSo: '#2F9748',
  strong: '#42A444',
  unbelievablyStrong2: '#BDB91A',
  unbelievablyStrong3: '#FBC305',
  unbelievablyStrong4: '#EC5915',
  fair: '#E31320',
};

export const FONTS: Theme['FONTS'] = {
  heading1: createFontStyle('Manrope-ExtraBold', 22, 32),
  heading1Medium: createFontStyle('Manrope-Medium', 22, 32),
  heading2: createFontStyle('Manrope-Bold', 18, 28),
  heading2ExtraBold: createFontStyle('Manrope-ExtraBold', 18, 20),
  heading3: createFontStyle('Manrope-Bold', 16, 24),
  heading4: createFontStyle('Manrope-Bold', 16, 20),

  label1: createFontStyle('Manrope-Bold', 14, 22),
  label2: createFontStyle('Manrope-Bold', 12, 18),
  label2Medium: createFontStyle('Manrope-Medium', 12, 18),
  label3: createFontStyle('Manrope-Bold', 10, 16),
  label3Medium: createFontStyle('Manrope-Medium', 10, 16),

  body0: createFontStyle('Manrope-Regular', 16, 18),
  body1: createFontStyle('Manrope-Regular', 14, 22),
  body2: createFontStyle('Manrope-Regular', 12, 18),
  body3: createFontStyle('Manrope-Regular', 10, 16),
};
