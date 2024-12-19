import type {
  ImageProps,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';

export type iconProps = {
  name: ImageProps['source'];
  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  resizeMode?: 'contain' | 'cover';
  width: number;
  height: number;
};
