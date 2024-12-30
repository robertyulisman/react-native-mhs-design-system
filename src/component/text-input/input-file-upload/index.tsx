/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ActivityIndicator,
  Alert,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  type CameraOptions,
  type ImageLibraryOptions,
  type ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import ImageView from 'react-native-image-viewing';
import Modal from 'react-native-modal';
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';
import { ICONS } from '../../../assets/icons';
import { COLORS } from '../../../design-system';
import { imageResizer } from '../../../utils';
import Icon from '../../icon';
import Text from '../../text';
import Toast from '../../toast';
import type { IInputFileUpload } from '../type';

const InputFileUpload: React.FC<IInputFileUpload> = (props) => {
  const {
    onChangeFile,
    errorMessage,
    label,
    error,
    placeholder,
    containerStyle,
    primary,
    value,
    deleteImage,
    apiUrl,
  } = props;

  const [image, setImage] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(false);
  const [types, setTypes] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [isPreview, setIsPreview] = React.useState(false);

  const handleOpenFile = async () => {
    setOpen(true);
  };

  const handlePickerImage = async (type: 'library' | 'camera') => {
    setTypes(type);
    setOpen(false);

    setTimeout(async () => {
      setTypes('');
      const optionsLibrary: ImageLibraryOptions = {
        mediaType: 'photo',
        quality: 0.9,
        maxWidth: 1000,
        maxHeight: 1000,
      };

      if (type === 'library') {
        launchImageLibrary(
          optionsLibrary,
          async (result: ImagePickerResponse) => {
            console.log('result image', result);
            handleSaveAndCompressImage(result);
          }
        );
        return;
      }

      if (type === 'camera') {
        await handleCameraAccess();
      }
    }, 500);
  };

  const handleCameraAccess = async () => {
    const optionsCamera: CameraOptions = {
      mediaType: 'photo',
      cameraType: 'back',
    };

    const permission =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA;

    try {
      const result = await check(permission);
      const permissionHandlers: Record<string, () => Promise<void>> = {
        [RESULTS.UNAVAILABLE]: async () => {
          Toast.show({
            text: 'Tidak bisa mengakses Fitur Kamera, silahkan di unblock',
            type: 'warning',
          });
        },
        [RESULTS.BLOCKED]: async () => {
          Toast.show({
            text: 'Tidak bisa mengakses Fitur Kamera, silahkan di unblock',
            type: 'warning',
          });
        },
        [RESULTS.DENIED]: async () => {
          await request(permission);
          return handleCameraAccess(); // Retry after requesting permission
        },
        [RESULTS.GRANTED]: async () => {
          launchCamera(optionsCamera, async (result: ImagePickerResponse) => {
            handleCameraResult(result);
          });
        },
      };

      // Execute the handler based on the permission result
      if (permissionHandlers[result]) {
        await permissionHandlers[result]();
      }
    } catch (error) {
      console.log('error permission', error);
    }
  };

  const handleCameraResult = (result: ImagePickerResponse) => {
    if (result.errorCode === 'others') {
      return Alert.alert('Error Camera', result.errorMessage);
    }
    if (result.errorCode === 'camera_unavailable') {
      return Alert.alert('Error Camera', 'Kamera Tidak Tersedia');
    }
    console.log('result camera', result);
    handleSaveAndCompressImage(result);
  };

  const handleSaveAndCompressImage = async (result: any) => {
    setLoading(true);

    // Handle cancellation and errors
    if (result.didCancel) {
      console.log('User cancelled image picker');
      setLoading(false);
      return;
    }

    if (result.errorCode) {
      console.log('ImagePicker Error: ', result.errorMessage);
      setLoading(false);
      return;
    }

    const asset = result.assets[0];
    const realSize = asset.fileSize / 1000000;

    try {
      if (realSize > 1) {
        const response = await imageResizer({
          uri: asset.uri,
          data: asset,
          label,
        });
        processImageResponse(response);
      } else {
        processImageResponseWithoutResize(asset);
      }
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const processImageResponse = (response: any) => {
    setImage(response);
    onChangeFile(response);
    setTypes('');
    setOpen(false);
  };

  const processImageResponseWithoutResize = (asset: any) => {
    const extract: RegExp = /(?:\.([^.]+))?$/;
    const extensionFile: string | null =
      extract.exec(asset.fileName)?.[1] || 'png';
    const fileName: string = `${label}.${extensionFile}`.toLowerCase();

    console.log('result fileName', fileName);
    const dataImage = {
      ...asset,
      fileSize: (asset.fileSize / 1000000).toFixed(2),
      fileName,
    };

    console.log('result dataImage', dataImage);
    setImage(dataImage);
    onChangeFile(dataImage);
  };

  const handleError = (error: any) => {
    setTimeout(() => {
      Toast.show({
        text: error as string,
        type: 'error',
      });
    }, 1000);
  };

  React.useEffect(() => {
    setImage(value ?? null);
  }, [value]);

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
          borderRadius: 14,
          borderWidth: 1,
          borderColor: image !== null ? COLORS.dark[500] : COLORS.light[300],
          padding: 12,
        }}
      >
        {image !== null ? (
          <View style={{ flex: 1, paddingRight: 10 }}>
            {typeof image === 'string' ? (
              <Text ellipsizeMode="tail" numberOfLines={1} variant="label-1">
                {image}
              </Text>
            ) : (
              <Text ellipsizeMode="tail" numberOfLines={1} variant="label-1">
                {image.originalFileName
                  ? image.originalFileName
                  : image.fileName}
              </Text>
            )}
            {typeof image === 'string' ? null : (
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                variant="label-2-medium"
                type="secondary"
              >
                {`${image?.fileSize} MB`}
              </Text>
            )}
          </View>
        ) : (
          <TouchableOpacity
            onPress={handleOpenFile}
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingVertical: 10,
            }}
          >
            {!loading && (
              <Icon width={24} height={24} name={ICONS.input.upload} />
            )}
            <Text variant="body-1">
              {loading ? 'Mengunggah Dokumen' : placeholder}
            </Text>
          </TouchableOpacity>
        )}

        {image !== null && (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => setIsPreview(true)}>
              <FastImage
                resizeMode="cover"
                source={{
                  uri:
                    typeof image === 'string'
                      ? `${apiUrl}/${image}`
                      : image?.uri,
                }}
                style={{ width: 80, height: 50, borderRadius: 8 }}
              />
            </TouchableOpacity>

            {!loading && (
              <TouchableOpacity
                onPress={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setImage(null);
                    deleteImage();
                    setLoading(false);
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
        {/* placeholder image */}
        {loading ? (
          <ActivityIndicator
            color={COLORS.primary[500]}
            size={24}
            style={{ marginLeft: 8 }}
          />
        ) : (
          image === null && (
            <TouchableOpacity
              onPress={handleOpenFile}
              style={{
                width: 45,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: COLORS.light[300],
                borderWidth: 1,
                marginHorizontal: 2,
                borderRadius: 8,
              }}
            >
              <Icon width={24} height={24} name={ICONS.input.fileImage} />
            </TouchableOpacity>
          )
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
            uri: typeof image === 'string' ? `${apiUrl}/${image}` : image?.uri,
          },
        ]}
        imageIndex={0}
        visible={isPreview}
        onRequestClose={() => setIsPreview(false)}
        backgroundColor={COLORS.blackTransparent['75']}
        presentationStyle="overFullScreen"
      />
      <Modal
        isVisible={open}
        onBackButtonPress={() => setOpen(false)}
        onBackdropPress={() => setOpen(false)}
        style={{ justifyContent: 'flex-end', margin: 16 }}
        useNativeDriverForBackdrop
      >
        <View
          onStartShouldSetResponder={() => true}
          style={{
            width: 35,
            height: 4,
            backgroundColor: COLORS.dark[300],
            alignSelf: 'center',
            marginBottom: 8,
            borderRadius: 4,
          }}
        />
        <View
          style={{
            padding: 16,
            borderRadius: 16,
            backgroundColor: COLORS.light[50],
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => handlePickerImage('library')}
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor:
                  types === 'library' ? COLORS.primary[500] : COLORS.light[300],
                borderRadius: 12,
                paddingHorizontal: 5,
                paddingVertical: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 5,
              }}
            >
              <Icon
                width={40}
                height={40}
                name={ICONS.smartphone}
                imageStyle={{
                  tintColor:
                    types === 'library'
                      ? COLORS.primary[500]
                      : COLORS.dark[500],
                }}
              />
              <Text
                variant="label-1"
                style={{
                  marginTop: 10,
                  textAlign: 'center',
                  color:
                    types === 'library'
                      ? COLORS.primary[500]
                      : COLORS.dark[500],
                }}
              >
                Pilih dari Perangkat
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handlePickerImage('camera')}
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor:
                  types === 'camera' ? COLORS.primary[500] : COLORS.light[300],
                borderRadius: 12,
                paddingHorizontal: 5,
                paddingVertical: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 5,
              }}
            >
              <Icon
                width={40}
                height={40}
                name={ICONS.camera}
                imageStyle={{
                  tintColor:
                    types === 'camera' ? COLORS.primary[500] : COLORS.dark[500],
                }}
              />
              <Text
                variant="label-1"
                style={{
                  marginTop: 10,
                  textAlign: 'center',
                  color:
                    types === 'camera' ? COLORS.primary[500] : COLORS.dark[500],
                }}
              >
                Ambil Foto
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default InputFileUpload;
