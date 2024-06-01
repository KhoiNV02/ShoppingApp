export default VNDFormat = money => {
  if (
    typeof money === 'object' ||
    money === '' ||
    isNaN(money) ||
    parseFloat(money) < 0
  )
    return 'Wrong Input';
  money = Math.round(parseFloat(money));
  const result = money.toLocaleString('vi-VN').toString() + 'đ';
  return result;
};
