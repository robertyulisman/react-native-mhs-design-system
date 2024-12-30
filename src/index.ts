/**
 *
 * export all common component
 */
export {
  Accordion,
  AlertModal,
  BottomModal,
  Button,
  CustomSwitch,
  Header,
  Icon,
  ImagePreview,
  Input,
  InputArea,
  InputDate,
  InputDropdown,
  InputEmail,
  InputFileCamera,
  InputFileUpload,
  InputNumber,
  InputPassword,
  InputPhone,
  InputWhatsapp,
  Paragraf,
  RadioButton,
  Separator,
  Text,
  TextHighlighted,
  Toast,
} from './component';

/**
 *
 * export all modules component
 */
export {
  AnimatedNumber,
  CountDown,
  PieChart,
  Shimmering,
  Switch,
} from './modules';

/**
 *
 * export all as assets
 * FONTS_TYPE, GIFFS, ICONS, IMAGES, LOTTIES_FILE
 */
export * as assets from './assets';

/**
 *
 * export all as design-system
 *
 * COLORS,
 * COLORS_PALETTE,
 * FONTS,
 * SIGNATURE_STYLE,
 * SIZE,
 * SYSTEMFONTS,
 * TAGSTYLES
 */
export * as theme from './design-system';

/**
 *
 * export all as libs
 *
 * getAllAsyncStorage
 * getAsyncStorage
 * removeAsyncStorage
 * setAsyncStorage
 */
export * as libs from './libs';

/**
 *
 * export all as utils
 */
export * as utils from './utils';

/**
 *
 * export all type for all component
 */
export type * from './component/type';
export type * from './design-system/type';
export type * from './modules/type';
