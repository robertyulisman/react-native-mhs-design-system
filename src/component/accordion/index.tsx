/* eslint-disable react-native/no-inline-styles */
import { type FC, type PropsWithChildren, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ICONS } from '../../assets/icon';
import { COLORS } from '../../design-system';
import Icon from '../icon';
import Text from '../text';
import type { IAccordionProps } from './type';

const Accordion: FC<PropsWithChildren<IAccordionProps>> = (props) => {
  const {
    parentContainerStyles,
    bodyStyles,
    headerText,
    headerStyles,
    headerTextStyles,
    headerIconStyles,
    headerIconColor = '#000000',
    headerIconSize = 22,
    isOpen = null,
    onPress = null,
    duration = 200,
    children,
  } = props;

  const [open, setOpen] = useState(false);
  const animatedHeightValue = useSharedValue(0);
  const bodyHeight = useSharedValue(0);

  const headerPressHandler = () => {
    if (typeof isOpen === 'boolean') {
    } else {
      toggleOpen();
    }
    if (typeof onPress === 'function') {
      onPress();
    }
  };

  const toggleOpen = () => {
    toggleAnimationValue(!open);
    setOpen(!open);
  };

  const toggleAnimationValue = (isLocalOpen: boolean) => {
    if (isLocalOpen) {
      animatedHeightValue.value = withTiming(1, {
        duration: duration,
        easing: Easing.inOut(Easing.quad),
      });
    } else {
      animatedHeightValue.value = withTiming(0, {
        duration: duration,
      });
    }
  };

  const animatedHeight = useAnimatedStyle(() => {
    const height = interpolate(
      animatedHeightValue.value,
      [0, 1],
      [0, bodyHeight.value]
    );
    const marginTop = interpolate(animatedHeightValue.value, [0, 1], [0, -16]);
    return {
      height: height,
      marginTop: marginTop,
    };
  });

  const animatedRotation = useAnimatedStyle(() => {
    const rotate = interpolate(animatedHeightValue.value, [0, 1], [0, 180]);
    return {
      transform: [{ rotate: `${rotate}deg` }],
    };
  });

  useEffect(() => {
    if (typeof isOpen === 'boolean') {
      toggleAnimationValue(isOpen);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <View style={[styles.mainContainer, parentContainerStyles]}>
      <View
        style={{
          borderRadius: 12,
          backgroundColor: COLORS.light['300'],
          zIndex: 999,
          borderWidth: 1,
          borderColor: COLORS.dark['300'],
        }}
      >
        <TouchableOpacity
          style={[styles.header, headerStyles]}
          onPress={headerPressHandler}
        >
          <Text variant="label-1" style={[styles.headerText, headerTextStyles]}>
            {headerText}
          </Text>

          <Animated.View style={[animatedRotation, headerIconStyles]}>
            <Icon
              containerStyle={{ width: headerIconSize, height: headerIconSize }}
              imageStyle={{ tintColor: headerIconColor }}
              name={ICONS.chevronDown}
            />
          </Animated.View>
        </TouchableOpacity>
      </View>

      <Animated.View
        style={[
          styles.bodyContainer,
          animatedHeight,
          bodyStyles,
          {
            borderBottomWidth:
              typeof isOpen === 'boolean' && isOpen === true ? 1 : 0,
            borderLeftWidth:
              typeof isOpen === 'boolean' && isOpen === true ? 1 : 0,
            borderRightWidth:
              typeof isOpen === 'boolean' && isOpen === true ? 1 : 0,
          },
        ]}
      >
        <View
          style={styles.body}
          onLayout={(event) => {
            console.log('event', event.nativeEvent.layout.height);
            bodyHeight.value = event.nativeEvent.layout.height;
          }}
        >
          <View style={{ padding: 12, marginTop: 16 }}>{children}</View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
  header: {
    flexDirection: 'row',
    borderRadius: 12,
    backgroundColor: COLORS.light['300'],
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  headerText: {
    flex: 1,
  },
  bodyContainer: {
    borderRadius: 12,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    borderColor: COLORS.dark['300'],
  },
  body: {
    position: 'absolute',
    width: '100%',
  },
});

export default Accordion;
