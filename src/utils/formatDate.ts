import moment from 'moment';

function formatDate<T extends Date | string | number>(
  date: T,
  format: string = 'DD MMMM YYYY' // Default format
): string {
  // Convert the input to a moment object
  const momentDate = moment(date);

  // Check if the date is valid
  if (!momentDate.isValid()) {
    throw new Error('Invalid date provided');
  }

  // Return the formatted date
  return momentDate.format(format);
}

export default formatDate;
