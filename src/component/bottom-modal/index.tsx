/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { COLORS } from '../../design-system';
import type { IBottomModalProps } from './type';

const BottomModal: React.FC<React.PropsWithChildren<IBottomModalProps>> = ({
  children,
  open,
  onClose,
  style,
  showIndicator = true,
}) => {
  return (
    <Modal
      isVisible={open}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      style={[{ justifyContent: 'flex-end', margin: 16 }, style]}
      useNativeDriverForBackdrop
      swipeDirection={['down']}
      avoidKeyboard
    >
      {showIndicator && (
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
      )}

      <View
        style={{
          padding: 16,
          borderRadius: 16,
          backgroundColor: COLORS.light[50],
        }}
      >
        {children}
      </View>
    </Modal>
  );
};

export default BottomModal;
