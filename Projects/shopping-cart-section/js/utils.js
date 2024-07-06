export const updateTotalValue = (addingProduct, productId) => {
  let $totalPrice = document.getElementById('total-value');
  const existingPrice = Number($totalPrice.textContent.slice(1));
  const salePrice = Number(document.getElementById(productId).textContent);

  const newPrice = addingProduct
    ? existingPrice + salePrice
    : existingPrice - salePrice;

  $totalPrice.textContent = '$' + String(newPrice);
};

export const updateQty = (qtyId, qtyValue) => {
  let $qty = document.getElementById(qtyId);
  $qty.textContent = qtyValue;
};

export const getProductId = id => {
  return id.split('_')[1];
};
