import { PixelRatio, Platform } from 'react-native';

const fontScale = PixelRatio.getFontScale();

const getFontSize = (size: number): number | undefined => {
  if (Platform.OS === 'android') {
    return size / fontScale;
  }
  if (Platform.OS === 'ios') {
    return (size + 2) / fontScale;
  }
  // Default return for unsupported platforms
  return undefined; // or you could return a default size, like 0
};

export default getFontSize;
