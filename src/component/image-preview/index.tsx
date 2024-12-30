import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import ImageView from 'react-native-image-viewing';
import { COLORS } from '../../design-system';
import type { IImagePreviewProps } from './type';

const ImagePreview: React.FC<IImagePreviewProps> = ({
  previewEnabled,
  width = 50,
  height = 50,
  type = 'rounded',
  uri,
  imageStyle,
  ...rest
}) => {
  const [isPreview, setIsPreview] = React.useState(false);

  return (
    <View>
      {previewEnabled && isPreview && (
        <View style={styles.imageViewContainer}>
          <ImageView
            images={[{ uri }]}
            imageIndex={0}
            visible={isPreview}
            onRequestClose={() => setIsPreview(false)}
            backgroundColor={COLORS.blackTransparent['90']}
            presentationStyle="overFullScreen"
            animationType="fade"
          />
        </View>
      )}

      <TouchableOpacity
        disabled={!previewEnabled}
        onPress={() => setIsPreview(true)}
      >
        <FastImage
          style={[
            styles.image,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              width,
              height,
              borderRadius: type === 'square' ? width / 2 : 0,
            },
            imageStyle,
          ]}
          source={{ uri }}
          {...rest}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageViewContainer: {
    marginHorizontal: 16,
  },
  image: {
    backgroundColor: COLORS.light['500'],
  },
});

export default ImagePreview;
