import type { StyleProp } from 'react-native';
import type { FastImageProps, ImageStyle } from 'react-native-fast-image';

export interface IImagePreviewProps extends FastImageProps {
  width?: number;
  height?: number;
  previewEnabled?: boolean;
  type?: 'rounded' | 'square';
  uri: string;
  imageStyle?: StyleProp<ImageStyle>;
}
