const convertIndexToStringDay = (index: number): string => {
  const indexToStringDay: { [key: number]: string } = {
    1: 'Pertama',
    2: 'Kedua',
    3: 'Ketiga',
    4: 'Keempat',
    5: 'Kelima',
    6: 'Keenam',
    7: 'Ketujuh',
    8: 'Kedelapan',
    9: 'Kesembilan',
    10: 'Kesepuluh',
    11: 'Kesebelas',
    12: 'Kedua belas',
    13: 'Ketiga belas',
    14: 'Keempat belas',
    15: 'Kelima belas',
    16: 'Keenam belas',
    17: 'Ketujuh belas',
    18: 'Kedelapan belas',
    19: 'Kesembilan belas',
    20: 'Kedua puluh',
    21: 'Kedua puluh Satu',
    22: 'Kedua puluh Dua',
    23: 'Kedua puluh Tiga',
    24: 'Kedua puluh Empat',
    25: 'Kedua puluh Lima',
    26: 'Kedua puluh Enam',
    27: 'Kedua puluh Tujuh',
    28: 'Kedua puluh Delapan',
    29: 'Kedua puluh Sembilan',
    30: 'Ketiga puluh',
    31: 'Ketiga puluh Satu',
    32: 'Ketiga puluh Dua',
    33: 'Ketiga puluh Tiga',
    34: 'Ketiga puluh Empat',
    35: 'Ketiga puluh Lima',
  };

  return `Hari ${indexToStringDay[index]}` || '';
};

export default convertIndexToStringDay;
