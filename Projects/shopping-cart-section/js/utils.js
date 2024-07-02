export const updateTotalValue = (addingProduct, productId) => {
  let $totalPrice = document.getElementById('total-value');
  const existingPrice = Number($totalPrice.textContent.slice(1));
  const salePrice = Number(document.getElementById(productId).textContent);

  const newPrice = addingProduct
    ? existingPrice + salePrice
    : existingPrice - salePrice;

  $totalPrice.textContent = '$' + String(newPrice);
};

export const updateQty = (addingProduct, qtyId) => {
  let $qty = document.getElementById(qtyId);
  const $exgQty = Number($qty.textContent);
  $qty.textContent = addingProduct ? $exgQty + 1 : $exgQty - 1;
};

export const getProductId = id => {
  return id.split('_')[1];
};
