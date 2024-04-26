export const countTotal = (dataTemp, tipeTemp) => {
  return dataTemp.reduce((total, item) => {
    if (item.tipe === tipeTemp) {
      return total + item.nominal;
    }
    return total;
  }, 0);
};
