import type { IButtonProps } from '../type';

export type AlertModalProps = {
  show: boolean;
  handleClose?: () => void;
  handlePress?: () => void;
  title?: string | undefined;
  description?: string | undefined;
  image: number;
  buttonPrimary?: boolean;
  titleButtonPrimary?: string;
  imageFull?: boolean;
  theme?: IButtonProps['theme'];
};
