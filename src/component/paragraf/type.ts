import type { PropsWithChildren } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type paragrafProps = PropsWithChildren<{
  keyText?: string;
  valueText?: string;
  separator?: boolean;
  black?: boolean;
  bold?: boolean;
  boldRight?: boolean;
  right?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  styleKey?: StyleProp<ViewStyle>;
  styleValue?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  secondary?: boolean;
}>;
