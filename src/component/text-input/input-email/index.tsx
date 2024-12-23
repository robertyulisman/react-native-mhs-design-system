/* eslint-disable react-native/no-inline-styles */

import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { TextInput, View } from 'react-native';
import { COLORS, FONTS } from '../../../design-system';
import Text from '../../text';
import RenderIcon from '../component/render-icon';
import type { IInputEmailProps, InputHandle } from '../type';

const InputEmail = forwardRef<InputHandle, IInputEmailProps>((props, ref) => {
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
    iconPosition,
  } = props;

  const textInputRef = useRef<TextInput>(null);

  useImperativeHandle(ref, () => ({
    focus: () => textInputRef.current?.focus(),
  }));

  const [isFocus, setIsFocus] = useState(false);

  const handleOnfocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const handleOnblur = useCallback(() => {
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
        {iconName && iconPosition !== 'right' && (
          <RenderIcon
            iconName={iconName}
            disabled={disabled}
            isFocus={isFocus}
            value={value}
          />
        )}

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
          placeholder={placeholder}
          autoCapitalize="none"
          maxLength={40}
          keyboardType="email-address"
          caretHidden={false}
          textContentType="emailAddress"
          autoComplete="email"
        />
        {iconName && iconPosition === 'right' && (
          <RenderIcon
            iconName={iconName}
            disabled={disabled}
            isFocus={isFocus}
            value={value}
          />
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
    </View>
  );
});

export default InputEmail;
