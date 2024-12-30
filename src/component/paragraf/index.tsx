import React from 'react';
import { StyleSheet, View, type StyleProp, type TextStyle } from 'react-native';
import { COLORS } from '../../design-system';
import Text from '../text';
import type { paragrafProps } from './type';

const Paragraf: React.FC<paragrafProps> = ({
  keyText,
  valueText,
  separator,
  black,
  bold,
  boldRight,
  right,
  containerStyle,
  styleKey,
  styleValue,
  textStyle,
  secondary,
  children,
}) => {
  const textColor = secondary
    ? COLORS.dark[400]
    : black
      ? COLORS.dark[500]
      : COLORS.light[50];
  const keyTextVariant = bold ? 'label-1' : 'body-1';
  const valueTextVariant = bold || boldRight ? 'label-1' : 'body-1';

  return (
    <React.Fragment>
      <View style={[styles.container, containerStyle]}>
        <View style={[styles.keyContainer, styleKey]}>
          <Text
            variant={keyTextVariant}
            style={[{ color: textColor }, textStyle]}
          >
            {keyText}
          </Text>
        </View>
        {separator && (
          <RenderSeparator color={textColor} textStyle={textStyle} />
        )}
        {valueText && (
          <View
            style={[
              styles.valueContainer,
              // eslint-disable-next-line react-native/no-inline-styles
              { alignItems: right ? 'flex-end' : 'flex-start' },
              styleValue,
            ]}
          >
            <Text
              variant={valueTextVariant}
              style={[{ color: textColor }, textStyle]}
            >
              {valueText}
            </Text>
          </View>
        )}
      </View>
      {children}
    </React.Fragment>
  );
};

const RenderSeparator = ({
  color,
  textStyle,
}: {
  color: any;
  textStyle: StyleProp<TextStyle>;
}) => (
  <Text variant="body-1" style={[styles.separatorText, { color }, textStyle]}>
    :
  </Text>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  keyContainer: {
    flex: 2,
  },
  valueContainer: {
    flex: 1.5,
  },
  separatorText: {
    marginHorizontal: 5,
  },
});
export default Paragraf;
