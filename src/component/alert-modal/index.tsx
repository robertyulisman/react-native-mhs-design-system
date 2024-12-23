/* eslint-disable react-native/no-inline-styles */
import { type FC } from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Modal from 'react-native-modal';
import { COLORS, SIZE } from '../../design-system';
import Button from '../button';
import Text from '../text';
import type { AlertModalProps } from './type';

const AlertModal: FC<AlertModalProps> = ({
  title,
  description,
  image,
  show,
  handleClose,
  buttonPrimary,
  handlePress,
  titleButtonPrimary,
  imageFull,
}) => {
  return (
    <Modal
      isVisible={show}
      onBackButtonPress={handleClose}
      onBackdropPress={handleClose}
      onSwipeComplete={handleClose}
      style={[{ justifyContent: 'center', margin: 16 }]}
      useNativeDriverForBackdrop
      swipeDirection={['down']}
      avoidKeyboard
    >
      <View
        style={{
          backgroundColor: COLORS.light[50],
          borderRadius: 14,
          marginTop: 100,
          marginHorizontal: 10,
        }}
      >
        <View
          style={{
            width: SIZE.width - 42,
            height: imageFull ? 265 : 200,
            alignSelf: 'center',
            overflow: 'hidden',
            marginTop: -150,
          }}
        >
          <FastImage
            resizeMode="contain"
            style={{
              width: SIZE.width - 42,
              height: 265,
            }}
            source={image}
          />
        </View>

        <Text
          style={{ textAlign: 'center', marginTop: 10 }}
          variant="heading-1"
        >
          {title}
        </Text>

        <Text
          style={{
            textAlign: 'center',
            width: '90%',
            marginTop: 10,
            alignSelf: 'center',
          }}
          variant="body-1"
          type="secondary"
        >
          {description}
        </Text>

        {handleClose && (
          <Button
            onPress={handleClose}
            secondaryRed
            title="Tutup"
            containerStyle={{
              width: '90%',
              marginTop: 20,
              marginBottom: 20,
            }}
            small
          />
        )}

        {buttonPrimary && (
          <Button
            onPress={handlePress}
            title={titleButtonPrimary}
            primary
            containerStyle={{
              width: '90%',
              marginTop: 20,
              marginBottom: 20,
            }}
            small
          />
        )}
      </View>
    </Modal>
  );
};

export default AlertModal;
