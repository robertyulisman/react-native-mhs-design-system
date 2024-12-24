import type { StyleProp, ViewStyle } from 'react-native';

export interface IBottomModalProps {
  open: boolean;
  onClose: () => void;
  style?: StyleProp<ViewStyle>;
  showIndicator?: boolean;
}
