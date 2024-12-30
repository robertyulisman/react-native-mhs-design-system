/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  TouchableOpacity,
  View,
  type ImageStyle,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { ICONS } from '../../assets/icons';
import { COLORS } from '../../design-system';
import Icon from '../icon';
import Text from '../text';
import type { headerProps } from './type';

export type closeProps = {
  iconStyle?: StyleProp<ImageStyle>;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};

const Close: React.FC<closeProps> = ({
  onPress,
  containerStyle,
  iconStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          width: 36,
          height: 36,
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.light[50],
        },
        containerStyle,
      ]}
    >
      <Icon
        width={20}
        height={20}
        name={ICONS.closeWhite}
        imageStyle={[{ tintColor: COLORS.dark[500] }, iconStyle]}
      />
    </TouchableOpacity>
  );
};

const Header: React.FC<headerProps> = ({
  back,
  close,
  onClose,
  onBack,
  title,
  action,
  customComponent,
  transparent,
  containerStyle,
  theme = 'primary',
}) => {
  const renderBackgroundColor = () => {
    if (transparent) return 'transparent';

    if (theme === 'primary') return COLORS.primary[500];
    if (theme === 'secondary') return COLORS.secondary[500];
    if (theme === 'success') return COLORS.success[500];

    return COLORS.primary[500];
  };
  return (
    <View
      style={[
        {
          backgroundColor: renderBackgroundColor(),
          height: 100,
          position: 'relative',
        },
        containerStyle,
      ]}
    >
      <View
        style={{
          bottom: 10,
          left: 0,
          position: 'absolute',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          paddingHorizontal: 16,
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: customComponent ? 'baseline' : 'center',
          }}
        >
          {back && <Close onPress={onBack} />}
          {close && <Close onPress={onClose} />}
          {title && (
            <Text
              variant="heading-2"
              style={{
                marginLeft: back ? 10 : 0,
                color: COLORS.light[50],
              }}
            >
              {title}
            </Text>
          )}

          {customComponent}
        </View>
        <View>{action}</View>
      </View>
    </View>
  );
};

export default Header;
