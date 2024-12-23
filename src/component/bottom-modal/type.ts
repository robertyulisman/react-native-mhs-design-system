import type { StyleProp, ViewStyle } from 'react-native';
import type { ModalProps } from 'react-native-modal';

export interface IBottomModalProps extends ModalProps {
  open: boolean;
  onClose: () => void;
  style?: StyleProp<ViewStyle>;
  showIndicator?: boolean;
}
