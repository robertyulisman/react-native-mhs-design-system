/* eslint-disable react-native/no-inline-styles */
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { TextInput, View } from 'react-native';
import { ICONS } from '../../../assets/icons';
import { COLORS, FONTS } from '../../../design-system';
import { getFontSize } from '../../../utils';
import Icon from '../../icon';
import Text from '../../text';
import type { IInputPhoneProps, InputHandle } from '../type';

const InputPhone = forwardRef<InputHandle, IInputPhoneProps>((props, ref) => {
  const {
    value,
    errorMessage,
    label,
    error,
    containerStyle,
    primary,
    disabled,
  } = props;

  const textInputRef = useRef<TextInput>(null);
  const [isFocus, setIsFocus] = useState(false);

  useImperativeHandle(ref, () => ({
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

      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: COLORS.light[50],
            alignItems: 'center',
            borderWidth: 1,
            borderColor: error
              ? COLORS.primary[500]
              : isFocus ||
                  (value !== undefined && value !== '' && value !== null)
                ? COLORS.dark[500]
                : COLORS.light[300],

            borderRadius: 14,
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
              name={ICONS.input.call}
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
          <Text
            type="secondary"
            variant="label-1"
            style={{
              marginHorizontal: 10,
            }}
          >
            +62
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: COLORS.light[50],
            alignItems: 'center',
            borderWidth: 1,
            borderColor: error
              ? COLORS.primary[500]
              : isFocus ||
                  (value !== undefined && value !== '' && value !== null)
                ? COLORS.dark[500]
                : COLORS.light[300],

            borderRadius: 14,
            marginLeft: 10,
            overflow: 'hidden',
            paddingHorizontal: 10,
          }}
        >
          <TextInput
            {...props}
            ref={textInputRef}
            onFocus={handleOnfocus}
            onBlur={handleOnblur}
            value={value}
            style={[
              {
                height: 50,
                backgroundColor: COLORS.light[50],
                flex: 1,
                color: COLORS.dark[500],
                paddingHorizontal: 10,
                fontFamily: 'Manrope-Regular',
                fontSize: getFontSize(14),
              },
              FONTS.body1,
            ]}
            maxLength={13}
            keyboardType="number-pad"
            returnKeyType={'done'}
          />
        </View>
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

export default InputPhone;
