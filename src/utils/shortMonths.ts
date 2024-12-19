const MONTH_NAMES_OBJECT = [
  {
    _id: 1,
    name: 'Januari',
  },
  {
    _id: 2,
    name: 'Februari',
  },
  {
    _id: 3,
    name: 'Maret',
  },
  {
    _id: 4,
    name: 'April',
  },
  {
    _id: 5,
    name: 'Mei',
  },
  {
    _id: 6,
    name: 'Juni',
  },
  {
    _id: 7,
    name: 'Juli',
  },
  {
    _id: 8,
    name: 'Agustus',
  },
  {
    _id: 9,
    name: 'September',
  },
  {
    _id: 10,
    name: 'Oktober',
  },
  {
    _id: 11,
    name: 'November',
  },
  {
    _id: 12,
    name: 'Desember',
  },
];

export const sortMonths = (
  startId: number
): { _id: number; name: string }[] => {
  const months = [...MONTH_NAMES_OBJECT]; // Create a copy of the original array

  const startMonthIndex = months.findIndex((month) => month._id === startId); // Find the index of the start month
  if (startMonthIndex !== -1) {
    const sortedMonths = months
      .slice(startMonthIndex + 1) // Get the months after the start month
      .concat(months.slice(0, startMonthIndex + 1)); // Concatenate the months from start month onwards

    return sortedMonths;
  }

  // If the startId is not found, return the original array
  return months;
};
