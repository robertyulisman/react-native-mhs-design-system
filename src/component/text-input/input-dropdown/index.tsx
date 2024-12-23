import { type FC, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { ICONS } from '../../../assets/icon';
import { COLORS } from '../../../design-system';
import isEmpty from '../../../validation/is-empty';
import Icon from '../../icon';
import Text from '../../text';
import type { IInputDropdown } from '../type';

const InputDropdown: FC<IInputDropdown> = ({
  onChangeText,
  value,
  errorMessage,
  label,
  error,
  placeholder,
  iconName,
  containerStyle,
  primary,
  data,
  disabled,
}) => {
  const [itemSelected, setItemSelected] = useState<any>(null);
  const [defaultValue, setDefaultValue] = useState<string | undefined>('');
  const [open, setOpen] = useState(false);

  const handleSelect = (item: any) => {
    setItemSelected(item);
    onChangeText(item);
    setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  useEffect(() => {
    if (data !== undefined) {
      const filtered = data?.filter((item: any) => item.value === value);

      setDefaultValue(filtered[0]?.text);
      setItemSelected(filtered[0]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

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
        onPress={() => setOpen(true)}
        style={[
          styles.touchableContainer,
          {
            borderColor:
              !isEmpty(itemSelected) || !isEmpty(value)
                ? COLORS.dark[500]
                : COLORS.light[300],
          },
        ]}
      >
        {iconName && (
          <View style={styles.iconContainer}>
            <Icon
              width={24}
              height={24}
              name={iconName}
              imageStyle={{
                tintColor: disabled
                  ? COLORS.dark[200]
                  : !isEmpty(value)
                    ? COLORS.dark[500]
                    : COLORS.dark[200],
              }}
            />
          </View>
        )}

        <View style={styles.textContainer}>
          <Text
            variant="body-1"
            type={
              defaultValue === '' || defaultValue === undefined
                ? 'secondary'
                : 'primary'
            }
          >
            {defaultValue === '' || defaultValue === undefined
              ? placeholder
              : itemSelected?.text || defaultValue}
          </Text>
        </View>

        <View style={styles.iconContainer}>
          <Icon
            width={24}
            height={24}
            name={ICONS.input.dropdown}
            imageStyle={{
              tintColor: disabled
                ? COLORS.dark[200]
                : !isEmpty(value)
                  ? COLORS.dark[500]
                  : COLORS.dark[200],
            }}
          />
        </View>
      </TouchableOpacity>

      <Modal
        isVisible={open}
        onBackButtonPress={() => setOpen(false)}
        onBackdropPress={() => setOpen(false)}
        style={styles.modal}
        useNativeDriverForBackdrop
      >
        <View style={styles.modalHandle} />
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text variant="label-1">{label}</Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}
          >
            {data?.map((item: any, i: number) => (
              <TouchableOpacity
                key={item?.value}
                onPress={() => handleSelect(item)}
                style={[
                  styles.option,
                  // eslint-disable-next-line react-native/no-inline-styles
                  { borderBottomWidth: i === data.length - 1 ? 0 : 1 },
                ]}
              >
                <Text variant="body-1">{item?.text}</Text>
                {itemSelected?.value === item.value && (
                  <Icon width={24} height={24} name={ICONS.checklistGreen} />
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>

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
  modal: {
    justifyContent: 'flex-end',
    margin: 16,
  },
  modalHandle: {
    width: 35,
    height: 4,
    backgroundColor: COLORS.dark[300],
    alignSelf: 'center',
    marginBottom: 8,
    borderRadius: 4,
  },
  modalContent: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: COLORS.light[50],
  },
  modalHeader: {
    marginHorizontal: 10,
    backgroundColor: COLORS.light[50],
    paddingVertical: 8,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  scrollView: {
    backgroundColor: COLORS.light[50],
    marginHorizontal: 10,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  option: {
    paddingVertical: 15,
    borderBottomColor: COLORS.light[100],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  errorText: {
    marginVertical: 10,
    color: COLORS.primary[500],
  },
});

export default InputDropdown;
