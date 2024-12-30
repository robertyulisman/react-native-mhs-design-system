import type { StyleProp, ViewStyle } from 'react-native';

export interface IShimmeringProps {
  colors?: Array<string>;
  gradientStyle?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle> & { width: number; height: number };
}
