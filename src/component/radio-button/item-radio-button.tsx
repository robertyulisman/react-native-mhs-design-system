import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../design-system';
import Text from '../text';
import type { ItemRadioButtonProps } from './type';

const ItemRadioButton: React.FC<ItemRadioButtonProps> = ({
  onPress,
  title,
  selected,
  style,
}) => {
  const isSelected = selected === title;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        style,
        { borderColor: isSelected ? COLORS.primary[500] : COLORS.light[500] },
      ]}
    >
      <View
        style={
          isSelected ? styles.selectedIndicator : styles.unselectedIndicator
        }
      />
      <Text
        variant="body-2"
        style={[
          styles.text,
          { color: isSelected ? COLORS.primary[500] : COLORS.dark[200] },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.light[50],
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 14,
    flex: 1,
    height: 50,
  },
  selectedIndicator: {
    width: 16,
    height: 16,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: COLORS.primary[500],
  },
  unselectedIndicator: {
    width: 16,
    height: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.light[500],
  },
  text: {
    marginLeft: 5,
  },
});

export default ItemRadioButton;
