import type { StyleProp, TextInputProps, ViewStyle } from 'react-native';

export type InputHandle = {
  focus: () => void;
};

export interface RenderIconProps {
  disabled: boolean | undefined;
  iconName: number;
  isFocus?: boolean;
  value: string | undefined;
}

export interface IInputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  error?: any;
  errorMessage?: string;
  iconName?: number;
  iconPosition?: 'left' | 'right';
  label?: string;
  placeholder?: string;
  primary?: boolean;
  value?: string;
}

export interface IInputArea extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  error?: any;
  errorMessage?: string;
  iconName?: number;
  label?: string;
  placeholder?: string;
  primary?: boolean;
  value?: string;
}

export interface IInputDropdown {
  containerStyle?: StyleProp<ViewStyle>;
  data?:
    | [
        {
          text: string | undefined;
          value: string;
        },
      ]
    | undefined;
  disabled?: boolean;
  error?: string;
  errorMessage?: string;
  iconName?: number;
  label?: string;
  onChangeText: (item: any) => void;
  placeholder: string;
  primary?: boolean;
  value: string;
}

export interface IInputEmailProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  error?: any;
  errorMessage?: string;
  iconName?: number;
  iconPosition?: 'left' | 'right';
  label?: string;
  placeholder: string;
  primary?: boolean;
  value: string | undefined;
}

export interface IInputNumberProps {
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  error?: any;
  errorMessage?: string;
  iconName?: number;
  label?: string;
  onChangeText: (text: string | number) => void | undefined;
  primary?: boolean;
  value?: string;
}

export interface IInputPasswordProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  error?: any;
  errorMessage?: string;
  iconName?: number;
  iconPosition?: 'left' | 'right';
  label?: string;
  placeholder: string;
  primary?: boolean;
  value: string;
}

export interface IInputPhoneProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  error?: any;
  errorMessage?: string;
  iconName?: number;
  iconPosition?: 'left' | 'right';
  label?: string;
  placeholder: string;
  primary?: boolean;
  value?: string;
}

export interface IInputFileUpload {
  apiUrl: string;
  containerStyle?: StyleProp<ViewStyle>;
  deleteImage: () => void;
  error?: string;
  errorMessage?: string;
  label?: string;
  onChangeFile: (item: any) => void;
  placeholder?: string;
  primary?: boolean;
  value?: string | null | undefined;
}

export interface IInputFileCameraProps {
  apiUrl: string;
  containerStyle?: StyleProp<ViewStyle>;
  deleteImage: () => void;
  error?: any;
  errorMessage?: string;
  image: any;
  label?: string;
  onPressCamera: () => void;
  primary?: boolean;
}

export interface IInputWhatsappProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  error?: any;
  errorMessage?: string;
  label?: string;
  primary?: boolean;
  value: string | undefined;
}
