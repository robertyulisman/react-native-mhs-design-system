import type { FC } from 'react';
import type { TextStyle } from 'react-native';
import Text from '../text';
import type { HighlightedTextProps } from './type';

const TextHighlighted: FC<HighlightedTextProps> = ({ text, color }) => (
  <Text style={{ color } as TextStyle} variant="label-1">
    {text}
  </Text>
);

export default TextHighlighted;
