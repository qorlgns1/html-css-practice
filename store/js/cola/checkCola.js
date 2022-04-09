export const getColaName = (btn) => {
  const colaName = btn.children[1].innerHTML;
  return colaName;
};

export const getColaPrice = (btn) => {
  let colaPrice = btn.children[2].innerHTML;
  colaPrice = colaPrice.replace(/[^0-9]/g, "");

  return Number(colaPrice);
};

export const getColaCount = (btn) => {
  const colaCount = btn.children[2].innerHTML;
  return Number(colaCount);
};
