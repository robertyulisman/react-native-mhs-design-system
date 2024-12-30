/* eslint-disable react-native/no-inline-styles */

import { type FC, useState } from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import ImageView from 'react-native-image-viewing';
import { ICONS } from '../../../assets/icons';
import { COLORS } from '../../../design-system';
import Icon from '../../icon';
import Text from '../../text';
import type { IInputFileCameraProps } from '../type';

const InputFileCamera: FC<IInputFileCameraProps> = (props) => {
  const {
    errorMessage,
    label,
    error,
    containerStyle,
    primary,
    onPressCamera,
    deleteImage,
    image = null,
    apiUrl,
  } = props;

  const [loading, setloading] = useState(false);
  const [isPreview, setIsPreview] = useState(false);

  return (
    <View style={[{ width: '100%' }, containerStyle]}>
      <Text
        variant="label-1"
        style={{
          marginVertical: 10,
          color: primary ? COLORS.dark[500] : COLORS.light[50],
        }}
      >
        {label}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: COLORS.light[50],
          alignItems: 'center',
          borderRadius: 14,
          borderWidth: 1,
          borderColor: image !== null ? COLORS.dark[500] : COLORS.light[300],
          padding: 12,
          minHeight: 80,
        }}
      >
        {image !== null ? (
          <View>
            <TouchableOpacity onPress={() => setIsPreview(true)}>
              <FastImage
                resizeMode="cover"
                source={{
                  uri:
                    typeof image === 'string'
                      ? `${apiUrl}/${image}`
                      : `file://${image?.path}`,
                }}
                style={{ width: 50, height: 50, borderRadius: 8 }}
              />
            </TouchableOpacity>
          </View>
        ) : null}
        <TouchableOpacity
          onPress={onPressCamera}
          style={{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon width={24} height={24} name={ICONS.input.camera} />
          <Text
            variant="label-1"
            style={{
              marginLeft: 5,
            }}
          >
            {image !== null ? 'Ambil Ulang Selfie' : 'Ambil Foto Selfie'}
          </Text>
        </TouchableOpacity>

        {image !== null && (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {loading ? (
              <ActivityIndicator
                color={COLORS.primary[500]}
                size={24}
                style={{ marginLeft: 8 }}
              />
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setloading(true);
                  setTimeout(() => {
                    deleteImage();
                    setloading(false);
                  }, 1000);
                }}
                style={{
                  backgroundColor: COLORS.dark[500],
                  borderRadius: 15,
                  height: 20,
                  width: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 10,
                }}
              >
                <Icon width={15} height={15} name={ICONS.closeWhite} />
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>

      {error && (
        <Text
          variant="body-1"
          style={{ marginVertical: 10, color: COLORS.primary[500] }}
        >
          {errorMessage ? errorMessage : `${label || ''} tidak boleh kosong!`}
        </Text>
      )}
      <ImageView
        images={[
          {
            uri:
              typeof image === 'string'
                ? `${apiUrl}/${image}`
                : `file://${image?.path}`,
          },
        ]}
        imageIndex={0}
        visible={isPreview}
        onRequestClose={() => setIsPreview(false)}
        backgroundColor={COLORS.blackTransparent['75']}
        presentationStyle="overFullScreen"
      />
    </View>
  );
};

InputFileCamera.displayName = 'InputFileCamera';

export default InputFileCamera;
