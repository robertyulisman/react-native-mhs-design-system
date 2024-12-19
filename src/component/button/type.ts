import type { StyleProp, TouchableOpacityProps, ViewStyle } from 'react-native';
import type { iconProps } from '../icon/type';
import type { ITextProps } from '../text/type';

export interface IButtonProps extends TouchableOpacityProps {
  title?: string;
  iconName?: number;
  iconStyle?: iconProps['imageStyle'];
  iconNameLeft?: number;
  iconStyleLeft?: iconProps['imageStyle'];
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: ITextProps['style'];
  primary?: boolean;
  secondary?: boolean;
  secondaryRed?: boolean;
  small?: boolean;
  loading?: boolean;
}
