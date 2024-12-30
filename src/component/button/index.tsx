import React from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../design-system';
import Icon from '../icon';
import Text from '../text';
import type { IButtonProps } from './type';

const Button: React.FC<IButtonProps> = (props) => {
  const {
    title,
    onPress,
    iconName,
    iconStyle,
    iconNameLeft,
    iconStyleLeft,
    containerStyle,
    textStyle,
    primary,
    secondary,
    secondaryRed,
    small,
    disabled,
    loading,
    theme = 'primary',
  } = props;

  const renderBackgroundColor = () => {
    if (disabled) return COLORS.light[200];
    if (secondary) return 'transparent';
    if (primary) {
      if (theme === 'primary') return COLORS.primary[500];
      if (theme === 'secondary') return COLORS.secondary[500];
      if (theme === 'success') return COLORS.success[500];
    }

    return COLORS.light[50];
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          backgroundColor: renderBackgroundColor(),
          borderWidth: disabled ? 0 : secondary || secondaryRed ? 1 : 0,
          borderColor: secondary
            ? COLORS.light[50]
            : secondaryRed
              ? COLORS.primary[500]
              : undefined,
          paddingVertical: small ? 10 : 14,
          borderRadius: small ? 22 : 25,
        },
        containerStyle,
      ]}
    >
      {iconNameLeft ? (
        <React.Fragment>
          {loading ? (
            <ActivityIndicator style={styles.indicator} />
          ) : (
            <Icon
              width={24}
              height={24}
              name={iconNameLeft}
              imageStyle={
                disabled ? { tintColor: COLORS.dark[200] } : iconStyleLeft
              }
              containerStyle={styles.iconLeft}
            />
          )}
        </React.Fragment>
      ) : loading ? (
        <ActivityIndicator
          color={COLORS.primary['500']}
          style={styles.indicator}
        />
      ) : null}
      <Text
        variant="label-1"
        style={[
          styles.text,
          {
            color: secondary
              ? COLORS.light[50]
              : disabled
                ? COLORS.dark[200]
                : primary
                  ? COLORS.light[50]
                  : secondaryRed
                    ? COLORS.primary[500]
                    : COLORS.dark[500],
          },
          textStyle,
        ]}
      >
        {title}
      </Text>

      {iconName && (
        <Icon
          width={24}
          height={24}
          name={iconName}
          imageStyle={iconStyle}
          containerStyle={styles.iconRight}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  indicator: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  iconLeft: {
    marginLeft: -5,
    marginRight: 5,
  },
  iconRight: {
    marginLeft: 5,
    marginRight: -5,
  },
  text: {
    textAlign: 'center',
  },
});

export default Button;
