/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View } from 'react-native';
import Text from '../text';
import ItemRadioButton from './item-radio-button';
import type { RadioButtonItem, RadioButtonProps } from './type';

const RadioLable = ({ label }: { label: string | undefined }) => {
  return <Text variant="body-2">{label}</Text>;
};

const RadioButton: React.FC<RadioButtonProps> = ({
  data,
  onChangeText,
  direction = 'row',
  containerStyle,
  label,
}) => {
  const [selected, setSelected] = useState<string | null>(null);
  const handlePress = (item: RadioButtonItem) => {
    setSelected(item.label);
    onChangeText(item);
  };

  return (
    <View style={[{}, containerStyle]}>
      {label && <RadioLable label={label} />}

      <View
        style={{
          flexDirection: direction === 'row' ? 'row' : 'column',
          marginVertical: 16,
        }}
      >
        {data.map((item: RadioButtonItem, index: number) => {
          const shortenedOptionLabel = item.label.replace(/\s+/g, '');
          const optionId = `radio-option-${shortenedOptionLabel}`;
          return (
            <ItemRadioButton
              key={optionId}
              title={item.label}
              onPress={() => handlePress(item)}
              selected={selected}
              style={{
                marginTop: direction === 'column' ? 10 : 0,
                marginRight: index === 0 ? 5 : 0,
                marginLeft: index === 1 ? 5 : 0,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default RadioButton;
