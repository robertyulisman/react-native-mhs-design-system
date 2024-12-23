import RNSInfo from 'react-native-sensitive-info';
import { asyncStorageEnum, options } from './type';

export const getAsyncStorage = async (key: keyof typeof asyncStorageEnum) => {
  return RNSInfo.getItem(key, options);
};

export const getAllAsyncStorage = async () => {
  return RNSInfo.getAllItems(options);
};

export const setAsyncStorage = async (
  key: keyof typeof asyncStorageEnum,
  value: string
) => {
  return RNSInfo.setItem(key, value, options);
};

export const removeAsyncStorage = async (
  key: keyof typeof asyncStorageEnum
) => {
  return RNSInfo.deleteItem(key, options);
};
