import type { StyleProp, ViewStyle } from 'react-native';

export interface ItemRadioButtonProps {
  onPress: () => void;
  title: string;
  selected: string | null; // Assuming selected can be a string or null
  style?: StyleProp<ViewStyle>; // Optional styling prop
}

export interface RadioButtonItem {
  label: string;
  value: any; // Adjust this type based on the actual value type
}

export interface RadioButtonProps {
  data: RadioButtonItem[];
  onChangeText: (item: RadioButtonItem) => void;
  direction?: ViewStyle['flexDirection'];
  containerStyle?: StyleProp<ViewStyle>;
  label?: string;
}
