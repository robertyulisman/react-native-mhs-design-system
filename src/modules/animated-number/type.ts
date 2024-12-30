import type { Animated, StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface IAnimatedNumberProps {
  animateToNumber: number;
  fontStyle?: StyleProp<TextStyle>;
  animationDuration?: number;
  includeComma?: boolean;
  easing?: Animated.TimingAnimationConfig['easing'];
  containerStyle?: StyleProp<ViewStyle>;
  fontVariant?: TextStyle['fontVariant'];
}
