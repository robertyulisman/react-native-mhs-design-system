/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { ICONS } from '../../../assets/icons';
import { COLORS, FONTS } from '../../../design-system';
import { getFontSize } from '../../../utils';
import Icon from '../../icon';
import Text from '../../text';
import type { IInputPasswordProps, InputHandle } from '../type';

const InputPassword = React.forwardRef<InputHandle, IInputPasswordProps>(
  (props, ref) => {
    const {
      onChangeText,
      value,
      errorMessage,
      label,
      placeholderTextColor,
      error,
      placeholder,
      iconName,
      containerStyle,
      primary,
      disabled,
    } = props;

    const [showPassword, setShowPassword] = React.useState(true);
    const [isFocus, setIsFocus] = React.useState(false);
    const textInputRef = React.useRef<TextInput>(null);

    React.useImperativeHandle(ref, () => ({
      focus: () => textInputRef.current?.focus(),
    }));

    const handleOnfocus = () => {
      setIsFocus(true);
    };

    const handleOnblur = () => {
      setIsFocus(false);
    };

    return (
      <View style={[{ width: '100%' }, containerStyle]}>
        {label && (
          <Text
            variant="label-1"
            style={{
              marginVertical: 10,
              color: primary ? COLORS.dark[500] : COLORS.light[50],
            }}
          >
            {label}
          </Text>
        )}

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: COLORS.light[50],
            alignItems: 'center',
            borderRadius: 14,
            borderWidth: 1,
            borderColor: error
              ? COLORS.primary[500]
              : isFocus ||
                  (value !== undefined && value !== '' && value !== null)
                ? COLORS.dark[500]
                : COLORS.light[300],
          }}
        >
          <View
            style={{
              width: 45,
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.light[300],
              marginHorizontal: 2,
              borderRadius: 12,
            }}
          >
            <Icon
              width={24}
              height={24}
              name={iconName}
              imageStyle={{
                tintColor: disabled
                  ? COLORS.dark[200]
                  : isFocus ||
                      (value !== undefined && value !== '' && value !== null)
                    ? COLORS.dark[500]
                    : COLORS.dark[200],
              }}
            />
          </View>
          <TextInput
            {...props}
            secureTextEntry={showPassword}
            ref={textInputRef}
            onFocus={handleOnfocus}
            onBlur={handleOnblur}
            value={value}
            onChangeText={onChangeText}
            style={[
              {
                flex: 1,
                height: 50,
                color: COLORS.dark[500],
                paddingHorizontal: 10,
                fontFamily: 'Manrope-Regular',
                fontSize: getFontSize(14),
              },
              FONTS.body1,
            ]}
            placeholderTextColor={placeholderTextColor || COLORS.dark[300]}
            placeholder={placeholder}
            importantForAutofill="yes"
            autoCapitalize="none"
            textContentType="password"
          />
          <TouchableOpacity
            onPress={() => setShowPassword((show) => !show)}
            style={{
              width: 45,
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.light[300],
              marginHorizontal: 2,
              borderRadius: 12,
            }}
          >
            <Icon
              width={24}
              height={24}
              name={
                !showPassword ? ICONS.input.eyesOpen : ICONS.input.eyesClose
              }
              imageStyle={{
                tintColor: disabled
                  ? COLORS.dark[200]
                  : isFocus ||
                      (value !== undefined && value !== '' && value !== null)
                    ? COLORS.dark[500]
                    : COLORS.dark[200],
              }}
            />
          </TouchableOpacity>
        </View>

        {error && (
          <Text
            variant="body-1"
            style={{ marginVertical: 10, color: COLORS.primary[500] }}
          >
            {errorMessage ? errorMessage : `${label || ''} tidak boleh kosong!`}
          </Text>
        )}
      </View>
    );
  }
);

InputPassword.displayName = 'InputPassword';

export default InputPassword;
