import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { COLORS } from '../../../design-system';
import Text from '../../text';
import RenderIcon from '../component/render-icon';
import type { IInputProps, InputHandle } from '../type';

const Input = forwardRef<InputHandle, IInputProps>((props, ref) => {
  const {
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
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text
          style={[
            styles.label,
            { color: primary ? COLORS.dark[500] : COLORS.light[50] },
          ]}
        >
          {label}
        </Text>
      )}

      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: !disabled ? COLORS.light[50] : COLORS.light[200],
            borderColor: error
              ? COLORS.primary[500]
              : disabled
                ? COLORS.light[300]
                : isFocus ||
                    (value !== undefined && value !== '' && value !== null)
                  ? COLORS.dark[500]
                  : COLORS.light[300],
          },
        ]}
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
          style={[
            styles.textInput,
            { color: disabled ? COLORS.dark[200] : COLORS.dark[500] },
          ]}
          placeholderTextColor={placeholderTextColor || COLORS.dark[300]}
          placeholder={placeholder}
          autoCapitalize="none"
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
        <Text style={styles.errorText}>
          {errorMessage ? errorMessage : `${label || ''} tidak boleh kosong!`}
        </Text>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 14,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
  },
  errorText: {
    marginVertical: 10,
    color: COLORS.primary[500],
  },
});

export default Input;
