import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import type { iconProps } from './type';

const Icon: React.FC<iconProps> = (props) => {
  const {
    width = 22,
    height = 22,
    resizeMode = 'contain',
    name,
    containerStyle,
    imageStyle,
    tintColor,
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
