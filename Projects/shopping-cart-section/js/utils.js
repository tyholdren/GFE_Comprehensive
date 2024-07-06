export const updateTotalValue = (addingProduct, productId) => {
  let $totalPrice = document.getElementById('total-value');
  const existingPrice = Number($totalPrice.textContent.slice(1));
  const salePrice = Number(document.getElementById(productId).textContent);

  let newPrice = addingProduct
    ? existingPrice + salePrice
    : existingPrice - salePrice;

  const priceAsString = newPrice.toString();

  if (priceAsString.includes('.')) {
    const priceArr = priceAsString.split('.');
    const dollars = priceArr[0];
    const cents = priceArr[1].padEnd(2, '0');
    newPrice = `${dollars}.${cents}`;
  } else {
    newPrice += '.00';
  }

  $totalPrice.textContent = '$' + newPrice;
};

export const updateQty = (qtyId, qtyValue) => {
  let $qty = document.getElementById(qtyId);
  $qty.textContent = qtyValue;
};

export const getProductId = id => {
  return id.split('_')[1];
};

export const updateButtons = ($decrementBtn, $incrementBtn, qty, stock) => {
  $incrementBtn.disabled = qty === stock;
  $decrementBtn.disabled = qty <= 1;
};

export const handleQuantityChange = (
  addingProduct,
  productId,
  qtyId,
  qtyValue
) => {
  updateTotalValue(addingProduct, productId);
  updateQty(qtyId, qtyValue);
};
