import type { FC } from 'react';
import type { TextStyle } from 'react-native';
import { StyleSheet, Text as TextRN } from 'react-native';
import { COLORS, FONTS } from '../../design-system';
import type { ITextProps } from './type';

const Text: FC<ITextProps> = (props) => {
  const { style, type, variant, children, ...rest } = props;
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  const textStyleMap: { [key: string]: TextStyle } = {
    'heading-1': FONTS.heading1,
    'heading-1-medium': FONTS.heading1Medium,
    'heading-2': FONTS.heading2,
    'heading-2-extra-bold': FONTS.heading2ExtraBold,
    'heading-3': FONTS.heading3,
    'heading-4': FONTS.heading4,
    'label-1': FONTS.label1,
    'label-2': FONTS.label2,
    'label-2-medium': FONTS.label2Medium,
    'label-3': FONTS.label3,
    'label-3-medium': FONTS.label3Medium,
    'body-0': FONTS.body0,
    'body-1': FONTS.body1,
    'body-2': FONTS.body2,
    'body-3': FONTS.body3,
  };

  const textStyle = variant ? textStyleMap[variant] : {};

  return (
    <TextRN
      {...rest}
      allowFontScaling={false}
      style={[
        type === 'secondary' ? styles.secondaryText : styles.primaryText,
        textStyle,
        passedStyles,
      ]}
    >
      {children}
    </TextRN>
  );
};

const styles = StyleSheet.create({
  primaryText: {
    color: COLORS.dark[500],
  },
  secondaryText: {
    color: COLORS.dark[300],
  },
});

export default Text;
