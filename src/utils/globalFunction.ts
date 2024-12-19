import moment from 'moment';
import { Alert, Dimensions, Linking } from 'react-native';
const { width, height } = Dimensions.get('screen');

interface Greeting {
  range: [number, number]; // Tuple with two numbers
  text: string;
}

export const formatNumber = (num: number) =>
  `Rp ${num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;

export const creditCardFormat = (value: string | undefined) => {
  if (value !== undefined) {
    const v = value
      .replace(/\s+/g, '')
      .replace(/[^0-9]/gi, '')
      .substr(0, 16);
    const parts = [];

    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }

    return parts.length > 1 ? parts.join(' ') : value;
  }

  return ''; // Return an empty string if value is undefined
};

export const creditCardDateFormat = (value: undefined | string) => {
  return (
    value?.replace(/\//g, '').substring(0, 2) +
    (value !== undefined && value.length > 2 ? '/' : '') +
    value?.replace(/\//g, '').substring(2, 4)
  );
};

export const creditCardVccFormat = (value: undefined | string) => {
  return (
    value?.replace(/\//g, '').substring(0, 3) + (value?.length === 3 ? '' : '')
  );
};

export const kontakAdmin = (text: any) => {
  const mobile = '82169114798';
  // const text = `Hallo kak, saya ada kendala ketika daftar aplikasi siswa dengan no hp ${numberPhone}, mohon dibantu ya kak `;
  const url = `whatsapp://send?text=${text}&phone=62${mobile}`;

  Linking.openURL(url)
    .then(() => {})
    .catch(() => {
      Alert.alert('Make sure Whatsapp installed on your device');
    });
};

export const greetingText = (): string => {
  const currentHour = moment().hour();
  const greetings: Greeting[] = [
    { range: [0, 11], text: 'Selamat Pagi, ' },
    { range: [12, 15], text: 'Selamat Siang, ' },
    { range: [16, 18], text: 'Selamat Sore, ' },
    { range: [19, 23], text: 'Selamat Malam, ' },
  ];

  for (const { range, text } of greetings) {
    if (currentHour >= range[0] && currentHour <= range[1]) {
      return text;
    }
  }

  return 'Selamat Pagi, '; // Default fallback
};
export const getOrientationWidth = () => {
  let width_screen = 0;
  if (width > height) {
    width_screen = height;
  }
  if (width < height) {
    width_screen = width;
  }

  return width_screen;
};
export const getOrientationHeight = () => {
  let height_screen = 0;
  if (width > height) {
    height_screen = width;
  }
  if (width < height) {
    height_screen = height;
  }

  return height_screen;
};
