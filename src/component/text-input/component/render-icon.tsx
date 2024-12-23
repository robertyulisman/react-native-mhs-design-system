import type { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../../design-system';
import Icon from '../../icon';
import type { RenderIconProps } from '../type';

const RenderIcon: FC<RenderIconProps> = ({
  iconName,
  disabled,
  isFocus,
  value,
}) => {
  return (
    <View style={styles.container}>
      <Icon
        width={24}
        height={24}
        name={iconName}
        imageStyle={{
          tintColor: disabled
            ? COLORS.dark[200]
            : isFocus || (value !== undefined && value !== '' && value !== null)
              ? COLORS.dark[500]
              : COLORS.dark[200],
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.light[300],
    marginHorizontal: 2,
    borderRadius: 12,
  },
});

export default RenderIcon;
