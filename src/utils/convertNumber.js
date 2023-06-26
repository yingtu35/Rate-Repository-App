export const convertNumber = (number) => {
  if (number >= 1000000000) {
    return Number(number / 1000000000).toFixed(1) + "b";
  } else if (number >= 1000000) {
    return Number(number / 1000000).toFixed(1) + "m";
  } else if (number >= 1000) {
    return Number(number / 1000).toFixed(1) + "k";
  } else {
    return number;
  }
};
