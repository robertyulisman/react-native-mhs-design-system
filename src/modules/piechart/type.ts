import type { StyleProp, ViewStyle } from 'react-native';

export type PieChartProps = {
  widthAndHeight: number;
  series: number[];
  sliceColor: string[];
  coverFill?: string; // Change from string | null to string | undefined
  coverRadius?: number;
  style?: StyleProp<ViewStyle>;
};
