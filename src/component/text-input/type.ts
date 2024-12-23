import type { StyleProp, TextInputProps, ViewStyle } from 'react-native';

export type InputHandle = {
  focus: () => void;
};

export interface RenderIconProps {
  iconName: number;
  disabled: boolean | undefined;
  isFocus?: boolean;
  value: string | undefined;
}

export interface IInputProps extends TextInputProps {
  value?: string;
  errorMessage?: string;
  label?: string;
  error?: any;
  placeholder?: string;
  iconName?: number;
  containerStyle?: StyleProp<ViewStyle>;
  primary?: boolean;
  disabled?: boolean;
  iconPosition?: 'left' | 'right';
}

export interface IInputArea extends TextInputProps {
  value?: string;
  errorMessage?: string;
  label?: string;
  error?: any;
  placeholder?: string;
  iconName?: number;
  containerStyle?: StyleProp<ViewStyle>;
  primary?: boolean;
  disabled?: boolean;
}

export interface IInputDropdown {
  errorMessage?: string;
  label?: string;
  error?: string;
  iconName?: number;
  containerStyle?: StyleProp<ViewStyle>;
  primary?: boolean;
  data?:
    | [
        {
          text: string | undefined;
          value: string;
        },
      ]
    | undefined;
  disabled?: boolean;
  value: string;
  onChangeText: (item: any) => void;
  placeholder: string;
}

export interface IInputEmailProps extends TextInputProps {
  value: string | undefined;
  errorMessage?: string;
  label?: string;
  error?: any;
  placeholder: string;
  iconName?: number;
  containerStyle?: StyleProp<ViewStyle>;
  primary?: boolean;
  disabled?: boolean;
  iconPosition?: 'left' | 'right';
}

export interface IInputNumberProps {
  value?: string;
  errorMessage?: string;
  label?: string;
  error?: any;
  iconName?: number;
  containerStyle?: StyleProp<ViewStyle>;
  primary?: boolean;
  disabled?: boolean;
  onChangeText: (text: string | number) => void | undefined;
}

export interface IInputPasswordProps extends TextInputProps {
  value: string;
  errorMessage?: string;
  label?: string;
  error?: any;
  placeholder: string;
  iconName?: number;
  containerStyle?: StyleProp<ViewStyle>;
  primary?: boolean;
  disabled?: boolean;
  iconPosition?: 'left' | 'right';
}

export interface IInputPhoneProps extends TextInputProps {
  value?: string;
  errorMessage?: string;
  label?: string;
  error?: any;
  placeholder: string;
  iconName?: number;
  containerStyle?: StyleProp<ViewStyle>;
  primary?: boolean;
  disabled?: boolean;
  iconPosition?: 'left' | 'right';
}

export interface IInputFileUpload {
  errorMessage?: string;
  label?: string;
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
  primary?: boolean;
  onChangeFile: (item: any) => void;
  deleteImage: () => void;
  value?: string | null | undefined;
  placeholder?: string;
  apiUrl: string;
}

export interface IInputFileCameraProps {
  errorMessage?: string;
  label?: string;
  error?: any;
  containerStyle?: StyleProp<ViewStyle>;
  primary?: boolean;
  onPressCamera: () => void;
  deleteImage: () => void;
  image: any;
  apiUrl: string;
}
