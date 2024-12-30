/* eslint-disable @typescript-eslint/no-shadow */
import moment from 'moment';

import React from 'react';
import {
  type StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  type ViewStyle,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { ICONS } from '../../../assets/icons';
import { COLORS } from '../../../design-system';
import Text from '../../text';
import RenderIcon from '../component/render-icon';

interface IInputDateProps {
  value?: string;
  errorMessage?: string;
  label?: string;
  error?: any;
  placeholder?: string;
  iconName?: number;
  containerStyle?: StyleProp<ViewStyle>;
  primary?: boolean;
  disabled?: boolean;
  onChangeText: (text: string) => void | undefined;
}

const InputDate: React.FC<IInputDateProps> = (props) => {
  const {
    onChangeText,
    value,
    errorMessage,
    label,
    error,
    placeholder,
    iconName,
    disabled,
    containerStyle,
    primary,
  } = props;

  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);

  const handleConfirm = (date: any) => {
    setDate(date);
    onChangeText(moment(date).format('YYYY-MM-DD'));
    setOpen(false);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text
          style={[
            styles.label,
            { color: primary ? COLORS.dark[500] : COLORS.light[50] },
          ]}
        >
          {label}
        </Text>
      )}

      <TouchableOpacity
        onPress={() => setOpen((open) => !open)}
        style={[
          styles.touchableContainer,
          {
            borderColor: error
              ? COLORS.primary[500]
              : value !== undefined && value !== '' && value !== null
                ? COLORS.dark[500]
                : COLORS.light[300],
          },
        ]}
      >
        {iconName && (
          <RenderIcon iconName={iconName} disabled={disabled} value={value} />
        )}

        <View style={styles.textContainer}>
          <Text
            variant="body-1"
            type={value === '' || value === null ? 'secondary' : 'primary'}
          >
            {value === '' || value === null
              ? placeholder
              : moment(date).format('YYYY-MM-DD')}
          </Text>
        </View>

        <RenderIcon
          iconName={ICONS.input.calendar}
          disabled={disabled}
          value={value}
        />
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={open}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => setOpen(false)}
        display="inline"
      />

      {error && (
        <Text style={styles.errorText}>
          {errorMessage ? errorMessage : `${label || ''} tidak boleh kosong!`}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    marginVertical: 10,
  },
  touchableContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.light[50],
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 14,
    zIndex: 999,
  },
  iconContainer: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.light[300],
    marginHorizontal: 2,
    borderRadius: 12,
  },
  textContainer: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  errorText: {
    marginVertical: 10,
    color: COLORS.primary[500],
  },
});

export default InputDate;
