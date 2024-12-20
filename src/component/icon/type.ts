import type {
  ImageProps,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';

export type iconProps = {
  /**
   * name
   * image source
   * require or use uri
   */
  name: ImageProps['source'];

  /**
   * styling for container icons
   *
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * styling for image icons
   *
   */
  imageStyle?: StyleProp<ImageStyle>;

  /**
   * resize mode
   * @default contain
   */
  resizeMode?: ImageStyle['resizeMode'];

  /**
   * width of icons
   * @default 22
   */
  width: number;

  /**
   * height of icons
   * @default 22
   */
  height: number;

  /**
   * tint color of icons
   * @default COLORS.dark[500]
   * '#16191D'
   */
  tintColor?: ImageStyle['tintColor'];
};
