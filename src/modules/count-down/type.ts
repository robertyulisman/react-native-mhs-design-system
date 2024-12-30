export interface ICountDownProps {
  id?: string;
  digitStyle?: object;
  digitTxtStyle?: object;
  timeLabelStyle?: object;
  separatorStyle?: object;
  timeToShow?: string[];
  showSeparator?: boolean;
  size?: number;
  until?: number;
  onChange?: (time: number) => void;
  onPress?: () => void;
  onFinish?: () => void;
  running?: boolean;
  style?: object;
  timeLabels?: { [key: string]: string };
  showBracket?: boolean;
}

export interface ICountDownState {
  until: number;
  lastUntil: number | null | undefined; // Allow undefined here
  wentBackgroundAt: number | null;
}
