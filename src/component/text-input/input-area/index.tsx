import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { COLORS } from '../../../design-system';
import Text from '../../text';
import RenderIcon from '../component/render-icon';
import type { IInputArea, InputHandle } from '../type';

const InputArea = React.forwardRef<InputHandle, IInputArea>((props, ref) => {
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

  const [isFocus, setIsFocus] = React.useState(false);
  const handleOnfocus = () => {
    setIsFocus(true);
  };

  const handleOnblur = () => {
    setIsFocus(false);
  };

  const textInputRef = React.useRef<TextInput>(null);
  React.useImperativeHandle(ref, () => ({
    focus: () => textInputRef.current?.focus(),
  }));

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
        {iconName && (
          <View style={styles.iconContainer}>
            <RenderIcon
              iconName={iconName}
              disabled={disabled}
              isFocus={isFocus}
              value={value}
            />
          </View>
        )}

        <TextInput
          {...props}
          ref={textInputRef}
          editable={!disabled}
          onFocus={handleOnfocus}
          onBlur={handleOnblur}
          value={value}
          onChangeText={onChangeText}
          style={[
            styles.textInput,
            { color: disabled ? COLORS.dark[200] : COLORS.dark[500] },
          ]}
          placeholderTextColor={placeholderTextColor || COLORS.dark[300]}
          placeholder={placeholder}
          keyboardType="default"
          multiline
          numberOfLines={6}
        />
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
  iconContainer: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.light[300],
    marginHorizontal: 2,
    borderRadius: 12,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
    minHeight: 114,
    // Add FONTS.body1 styles if necessary
  },
  errorText: {
    marginVertical: 10,
    color: COLORS.primary[500],
  },
});

export default InputArea;
