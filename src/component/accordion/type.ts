import type { ColorValue, StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface IAccordionProps {
  headerText: string;
  parentContainerStyles?: StyleProp<ViewStyle>;
  bodyStyles?: StyleProp<ViewStyle>;
  headerStyles?: StyleProp<ViewStyle>;
  headerTextStyles?: StyleProp<TextStyle>;
  headerIconStyles?: StyleProp<ViewStyle>;
  headerIconColor?: ColorValue;
  headerIconSize?: number;
  onPress?: Function;
  isOpen?: boolean | null;
  duration?: number;
}
