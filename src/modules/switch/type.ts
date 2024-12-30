import type { Animated, TextStyle, ViewStyle } from 'react-native';

export interface ISwitchProps {
  testID?: string; // Changed to only string | undefined
  onValueChange?: (value: boolean) => void;
  disabled?: boolean;
  activeText?: string;
  inActiveText?: string;
  backgroundActive?: string;
  backgroundInactive?: string;
  value?: boolean;
  circleActiveColor?: string;
  circleInActiveColor?: string;
  circleSize?: number;
  circleBorderActiveColor?: string;
  circleBorderInactiveColor?: string;
  activeTextStyle?: TextStyle;
  inactiveTextStyle?: TextStyle;
  containerStyle?: ViewStyle;
  barHeight?: number | null;
  circleBorderWidth?: number;
  innerCircleStyle?: ViewStyle;
  renderInsideCircle?: () => React.ReactNode;
  changeValueImmediately?: boolean;
  outerCircleStyle?: ViewStyle;
  renderActiveText?: boolean;
  renderInActiveText?: boolean;
  switchLeftPx?: number;
  switchRightPx?: number;
  switchWidthMultiplier?: number;
  switchBorderRadius?: number | null;
}

export interface ISwitchState {
  value: boolean;
  transformSwitch: Animated.Value;
  backgroundColor: Animated.Value;
  circleColor: Animated.Value;
  circleBorderColor: Animated.Value;
}
