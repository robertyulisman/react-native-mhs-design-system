const isEmpty = (value: any): boolean => {
  const isUndefinedOrNull = (val: any) => val === undefined || val === null;
  const isObjectEmpty = (obj: object) =>
    typeof obj === 'object' && Object.keys(obj).length === 0;
  const isStringEmpty = (str: string) =>
    typeof str === 'string' && str.trim().length === 0;

  return (
    isUndefinedOrNull(value) || isObjectEmpty(value) || isStringEmpty(value)
  );
};

export default isEmpty;
