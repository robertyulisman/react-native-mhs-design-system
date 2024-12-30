/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  type LayoutChangeEvent,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from 'react-native-mhs-design-system';
import type { IShimmeringProps } from './type';

const { COLORS } = theme;
const GREY = COLORS.light['300'];
const shimmeringAnimatedValue = new Animated.Value(0);

const Shimmering: React.FC<IShimmeringProps> = ({
  colors,
  gradientStyle,
  wrapperStyle,
}) => {
  const [viewWidth, setViewWidth] = useState<number>(-1);
  const animation = useRef(
    Animated.loop(
      Animated.timing(shimmeringAnimatedValue, {
        useNativeDriver: false,
        delay: 1200,
        duration: 750,
        toValue: 1,
      })
    )
  ).current;

  const gradientColors = [GREY, COLORS.light['50'], GREY];

  useEffect(() => {
    startAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startAnimation = () => {
    animation.start();
  };

  const handleLayoutChange = (event: LayoutChangeEvent) => {
    setViewWidth(event.nativeEvent.layout.width);
    startAnimation();
  };

  const getLeftValue = () => {
    return shimmeringAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-viewWidth, viewWidth],
    });
  };

  const width = Dimensions.get('screen').width;
  const loadingStyle = { backgroundColor: GREY };
  const left = getLeftValue();

  return (
    <View
      style={{
        width: wrapperStyle?.width ?? width,
        height: wrapperStyle?.height ?? 80,
      }}
    >
      <View
        style={[styles.container, loadingStyle, wrapperStyle]}
        onLayout={handleLayoutChange}
      >
        <Animated.View
          style={[
            {
              flex: 1,
              left,
            },
            gradientStyle,
          ]}
        >
          <LinearGradient
            colors={colors || gradientColors}
            start={{ x: 0.3, y: 0.2 }}
            end={{ x: 0.8, y: 0.5 }}
            style={{ flex: 1 }}
          />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    flex: 0,
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

export default Shimmering;
