import { Dimensions, type Falsy, type RecursiveArray } from 'react-native';
import { defaultSystemFonts } from 'react-native-render-html';
import { getFontSize } from '../utils';
import { createFontStyle, createTransparencyObject, opacities } from './helper';
import type { Theme } from './type';

const { width, height } = Dimensions.get('screen');

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

export const SIGNATURE_STYLE =
  '.m-signature-pad--footer {display: none; margin: 0px;}';

/**
 * react-native-render-html
 */
type NonRegisteredStylesProp<T> = T | Falsy | RecursiveArray<T | Falsy>;
type StylesDictionary = {
  [tag: string]: NonRegisteredStylesProp<any>;
};

export const SYSTEMFONTS = [
  ...defaultSystemFonts,
  'Manrope-Regular',
  'Manrope-Bold',
];
export const TAGSTYLES: StylesDictionary = {
  body: {
    lineHeight: getFontSize(22),
    color: COLORS.dark[400],
    fontFamily: 'Manrope-Regular',
    fontSize: getFontSize(14),
    textAlign: 'justify',
  },

  strong: {
    color: COLORS.dark[500],
    fontSize: getFontSize(14),
    fontFamily: 'Manrope-Bold',
  },
  h1: {
    color: COLORS.dark[500],
    fontSize: getFontSize(14),
    lineHeight: getFontSize(22),
  },
  h2: {
    color: COLORS.dark[500],
    fontSize: getFontSize(22),
    fontFamily: 'Manrope-Bold',
    fontWeight: 'normal',
    lineHeight: getFontSize(22),
  },
  h3: {
    fontSize: getFontSize(16),
    color: COLORS.dark[500],
    fontWeight: 'normal',
    fontFamily: 'Manrope-Bold',
    lineHeight: getFontSize(22),
  },
  h4: {
    fontSize: getFontSize(16),
    color: COLORS.dark[500],
    fontWeight: 'normal',
    fontFamily: 'Manrope-Bold',
    lineHeight: getFontSize(22),
  },
  p: {
    lineHeight: getFontSize(22),
    margin: 5,
  },

  ol: {
    color: COLORS.dark[500],
    fontSize: getFontSize(13),
    fontWeight: 'normal',
  },
  li: {
    color: COLORS.dark[400],
    fontSize: getFontSize(13),
    fontWeight: 'normal',
  },
};
