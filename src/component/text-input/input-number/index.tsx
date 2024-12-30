/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-shadow */
import { type FC, useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ICONS } from '../../../assets/icons';
import { COLORS } from '../../../design-system';
import Icon from '../../icon';
import Text from '../../text';
import type { IInputNumberProps } from '../type';

const InputNumber: FC<IInputNumberProps> = (props) => {
  const {
    onChangeText,
    errorMessage,
    label,
    error,
    containerStyle,
    primary,
    value = 0,
  } = props;

  const [number, setNumber] = useState<number>(0);

  const handleAddNumber = () => {
    setNumber((number) => number + 1);
    onChangeText(number + 1);
  };

  const handleMinusNumber = () => {
    if (number > 0) {
      onChangeText(number - 1);
      return setNumber((number) => number - 1);
    }
  };

  useEffect(() => {
    if (value !== 0 || value !== undefined) {
      setNumber(+value);
    }
  }, [value]);

  return (
    <View style={[{ flex: 1 }, containerStyle]}>
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
          alignItems: 'center',
          borderRadius: 14,
          borderWidth: 1,
          borderColor: COLORS.light[300],
        }}
      >
        <TouchableOpacity
          disabled={number === 0}
          onPress={handleMinusNumber}
          style={{
            width: 45,
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:
              number === 0 ? COLORS.light[200] : COLORS.light[300],
            margin: 2,
            borderRadius: 12,
          }}
        >
          <Icon
            width={24}
            height={24}
            name={ICONS.input.minus}
            containerStyle={{ opacity: number === 0 ? 0.3 : 1 }}
          />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text
            variant="body-1"
            style={{
              marginVertical: 10,
              color: number === 0 ? COLORS.dark[300] : COLORS.dark[500],
            }}
          >
            {`${number}`}
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleAddNumber}
          style={{
            width: 45,
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.light[300],
            margin: 2,
            borderRadius: 12,
          }}
        >
          <Icon width={24} height={24} name={ICONS.input.plus} />
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
};

InputNumber.displayName = 'InputNumber';

export default InputNumber;
