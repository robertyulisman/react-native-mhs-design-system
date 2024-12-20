import type { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { COLORS } from '../../design-system';
import type { iconProps } from './type';

const Icon: FC<iconProps> = (props) => {
  const {
    width = 22,
    height = 22,
    resizeMode = 'contain',
    name,
    containerStyle,
    imageStyle,
    tintColor = COLORS.dark[500],
  } = props;
  return (
    <View style={[styles.container, { width, height }, containerStyle]}>
      <Image
        style={[{ tintColor }, styles.image, imageStyle]}
        resizeMode={resizeMode}
        source={name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});

export default Icon;
