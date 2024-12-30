import React from 'react';
import {
  Animated,
  type GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import type { ISwitchProps, ISwitchState } from './type';

export default class Switch extends React.Component<
  ISwitchProps,
  ISwitchState
> {
  static defaultProps = {
    value: false,
    onValueChange: () => null,
    renderInsideCircle: () => null,
    innerCircleStyle: {},
    disabled: false,
    activeText: 'On',
    inActiveText: 'Off',
    backgroundActive: 'green',
    backgroundInactive: 'gray',
    circleActiveColor: 'white',
    circleInActiveColor: 'white',
    circleBorderActiveColor: 'rgb(100, 100, 100)',
    circleBorderInactiveColor: 'rgb(80, 80, 80)',
    circleSize: 30,
    barHeight: null,
    circleBorderWidth: 1,
    changeValueImmediately: true,
    outerCircleStyle: {},
    renderActiveText: true,
    renderInActiveText: true,
    switchLeftPx: 2,
    switchRightPx: 2,
    switchWidthMultiplier: 2,
    switchBorderRadius: null,
    testID: null,
  };

  constructor(props: ISwitchProps) {
    super(props);

    this.state = {
      value: props.value ?? false,
      transformSwitch: new Animated.Value(
        props.value
          ? props.circleSize! / props.switchLeftPx!
          : -props.circleSize! / props.switchRightPx!
      ),
      backgroundColor: new Animated.Value(props.value ? 75 : -75),
      circleColor: new Animated.Value(props.value ? 75 : -75),
      circleBorderColor: new Animated.Value(props.value ? 75 : -75),
    };
  }

  componentDidUpdate(prevProps: ISwitchProps) {
    const { value = false, disabled } = this.props; // Default to false if value is undefined

    if (prevProps.value === value) {
      return;
    }
    if (prevProps.disabled && disabled === prevProps.disabled) {
      return;
    }

    this.animateSwitch(value, () => this.setState({ value }));
  }

  handleSwitch = (event: GestureResponderEvent) => {
    console.log('event', event);
    const { value } = this.state;
    const {
      onValueChange,
      disabled,
      changeValueImmediately,
      value: propValue,
    } = this.props;

    if (disabled) {
      return;
    }

    if (this.props.value === this.state.value) {
      onValueChange && onValueChange(!this.state.value);
      return;
    }

    if (changeValueImmediately) {
      this.animateSwitch(!propValue);
      onValueChange && onValueChange(!propValue);
    } else {
      this.animateSwitch(!value, () =>
        this.setState(
          { value: !value },
          () => onValueChange && onValueChange(this.state.value)
        )
      );
    }
  };

  animateSwitch = (value: boolean, cb: () => void = () => {}) => {
    Animated.parallel([
      Animated.spring(this.state.transformSwitch, {
        toValue: value
          ? this.props.circleSize! / this.props.switchLeftPx!
          : -this.props.circleSize! / this.props.switchRightPx!,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.backgroundColor, {
        toValue: value ? 75 : -75,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.circleColor, {
        toValue: value ? 75 : -75,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.circleBorderColor, {
        toValue: value ? 75 : -75,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start(cb);
  };

  render() {
    const { transformSwitch, backgroundColor, circleColor, circleBorderColor } =
      this.state;

    const {
      backgroundActive,
      backgroundInactive,
      circleActiveColor,
      circleInActiveColor,
      activeText,
      inActiveText,
      circleSize,
      containerStyle,
      activeTextStyle,
      inactiveTextStyle,
      barHeight,
      circleBorderInactiveColor,
      circleBorderActiveColor,
      circleBorderWidth,
      innerCircleStyle,
      outerCircleStyle,
      renderActiveText,
      renderInActiveText,
      renderInsideCircle,
      switchWidthMultiplier,
      switchBorderRadius,
      value,
      ...restProps
    } = this.props;

    const interpolatedColorAnimation = backgroundColor.interpolate({
      inputRange: [-75, 75],
      outputRange: [
        backgroundInactive || 'gray', // Provide a fallback
        backgroundActive || 'green', // Provide a fallback
      ],
    });

    const interpolatedCircleColor = circleColor.interpolate({
      inputRange: [-75, 75],
      outputRange: [
        circleInActiveColor || 'lightgray', // Fallback to 'lightgray' if undefined
        circleActiveColor || 'white', // Fallback to 'white' if undefined
      ],
    });

    const interpolatedCircleBorderColor = circleBorderColor.interpolate({
      inputRange: [-75, 75],
      outputRange: [
        circleBorderInactiveColor || 'rgb(80, 80, 80)', // Fallback to a default if undefined
        circleBorderActiveColor || 'rgb(100, 100, 100)', // Fallback to a default if undefined
      ],
    });

    return (
      <TouchableWithoutFeedback
        onPress={this.handleSwitch}
        testID={this.props.testID || undefined}
        {...restProps}
      >
        <Animated.View
          style={[
            styles.container,
            containerStyle,
            {
              backgroundColor: interpolatedColorAnimation,
              width: circleSize! * switchWidthMultiplier!,
              height: barHeight || circleSize,
              borderRadius: switchBorderRadius || circleSize,
            },
          ]}
        >
          <Animated.View
            style={[
              styles.animatedContainer,
              {
                left: transformSwitch,
                width: circleSize! * switchWidthMultiplier!,
              },
              outerCircleStyle,
            ]}
          >
            {value && renderActiveText && (
              <Text style={[styles.text, styles.paddingRight, activeTextStyle]}>
                {activeText}
              </Text>
            )}

            <Animated.View
              style={[
                styles.circle,
                {
                  borderWidth: circleBorderWidth,
                  borderColor: interpolatedCircleBorderColor,
                  backgroundColor: interpolatedCircleColor,
                  width: circleSize,
                  height: circleSize,
                  borderRadius: circleSize! / 2,
                },
                innerCircleStyle,
              ]}
            >
              {renderInsideCircle && renderInsideCircle()}
            </Animated.View>
            {!value && renderInActiveText && (
              <Text
                style={[styles.text, styles.paddingLeft, inactiveTextStyle]}
              >
                {inActiveText}
              </Text>
            )}
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 71,
    height: 30,
    borderRadius: 30,
    backgroundColor: 'black',
  },
  animatedContainer: {
    flex: 1,
    width: 78,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  paddingRight: {
    paddingRight: 5,
  },
  paddingLeft: {
    paddingLeft: 5,
  },
});
