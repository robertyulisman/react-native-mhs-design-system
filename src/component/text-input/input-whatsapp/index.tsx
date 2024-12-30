/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { TextInput, View } from 'react-native';
import { ICONS } from '../../../assets/icons';
import { COLORS, FONTS } from '../../../design-system';
import Text from '../../text';
import RenderIcon from '../component/render-icon';
import type { IInputWhatsappProps, InputHandle } from '../type';

const InputWhatsapp = React.forwardRef<InputHandle, IInputWhatsappProps>(
  (props, ref) => {
    const {
      onChangeText,
      value,
      errorMessage,
      label,
      placeholderTextColor,
      error,
      containerStyle,
      primary,
      disabled,
    } = props;

    const textInputRef = React.useRef<TextInput>(null);

    React.useImperativeHandle(ref, () => ({
      focus: () => textInputRef.current?.focus(),
    }));

    const [isFocus, setIsFocus] = React.useState(false);

    const handleOnfocus = React.useCallback(() => {
      setIsFocus(true);
    }, []);

    const handleOnblur = React.useCallback(() => {
      setIsFocus(false);
    }, []);

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
            backgroundColor: !disabled ? COLORS.light[50] : COLORS.light[200],
            alignItems: 'center',
            borderWidth: 1,
            borderColor: error
              ? COLORS.primary[500]
              : disabled
                ? COLORS.light[300]
                : isFocus ||
                    (value !== undefined && value !== '' && value !== null)
                  ? COLORS.dark[500]
                  : COLORS.light[300],

            borderRadius: 14,
          }}
        >
          <RenderIcon
            iconName={ICONS.input.whatsapp}
            disabled={disabled}
            isFocus={isFocus}
            value={value}
          />

          <TextInput
            {...props}
            editable={!disabled}
            ref={textInputRef}
            onFocus={handleOnfocus}
            onBlur={handleOnblur}
            value={value}
            onChangeText={onChangeText}
            style={[
              {
                flex: 1,
                height: 50,

                color: disabled ? COLORS.dark[200] : COLORS.dark[500],
                paddingHorizontal: 10,
              },
              FONTS.body1,
            ]}
            placeholderTextColor={placeholderTextColor || COLORS.dark[300]}
            placeholder={'Masukkan No. HP Anda'}
            autoCapitalize="none"
            keyboardType="number-pad"
            caretHidden={false}
            // maxLength={15}
            // textContentType="emailAddress"
            // autoComplete="email"
            // textContentType="oneTimeCode"
          />
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

export default InputWhatsapp;
