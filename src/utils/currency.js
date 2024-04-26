export const currencyParser = amount => {
  const numb = amount;
  const format = numb?.toString().split('').reverse().join('');
  const convert = format?.match(/\d{1,3}/g);
  if (amount < 0) {
    return 'Rp- ' + convert?.join('.').split('').reverse().join('');
  } else {
    return 'Rp ' + convert?.join('.').split('').reverse().join('');
  }
};
