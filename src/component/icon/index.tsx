import type { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import type { iconProps } from './type';

const Icon: FC<iconProps> = (props) => {
  const { width, height, resizeMode, name, containerStyle, imageStyle } = props;
  return (
    <View style={[styles.container, { width, height }, containerStyle]}>
      <Image
        style={[styles.image, imageStyle]}
        resizeMode={resizeMode || 'contain'}
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
