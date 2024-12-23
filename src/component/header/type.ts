import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export type headerProps = {
  title?: string;
  action?: ReactNode;
  customComponent?: ReactNode;
  back?: boolean;
  close?: boolean;
  onClose?: () => void;
  onBack?: () => void;
  transparent?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};
