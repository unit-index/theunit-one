export const numberWithCommas = (x: number) => {
  if (x != undefined) {
    var parts = Math.round(x).toString();
    return parts.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return '';
};
