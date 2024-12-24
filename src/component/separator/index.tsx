import type { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../design-system';
import type { SeparatorProps } from './type';

const Separator: FC<SeparatorProps> = ({ dashed, high, style }) => {
  return (
    <View
      style={[
        styles.separator,
        // eslint-disable-next-line react-native/no-inline-styles
        { height: high ? 10 : 1, borderWidth: dashed ? 0.7 : 0 },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    backgroundColor: COLORS.light[300],
    marginTop: 16,
    marginBottom: 8,
    borderColor: COLORS.light[300],
    borderRadius: 1,
  },
});

export default Separator;
