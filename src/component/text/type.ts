import type { PropsWithChildren } from 'react';
import type { StyleProp, TextProps, TextStyle } from 'react-native';

type variantText =
  | 'heading-1'
  | 'heading-1-medium'
  | 'heading-2'
  | 'heading-2-extra-bold'
  | 'heading-3'
  | 'heading-4'
  | 'label-1'
  | 'label-2'
  | 'label-2-medium'
  | 'label-3'
  | 'label-3-medium'
  | 'body-0'
  | 'body-1'
  | 'body-2'
  | 'body-3';

export interface ITextProps extends PropsWithChildren<TextProps> {
  style?: StyleProp<TextStyle>;
  type?: 'primary' | 'secondary';
  variant?: variantText;
}
