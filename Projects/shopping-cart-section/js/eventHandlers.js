import {
  updateTotalValue,
  updateQty,
  getProductId,
  updateButtons,
  handleQuantityChange,
} from './utils.js';

export const handleEvent = (event, productsMetaData, $productsContainer) => {
  const { id, tagName } = event.target;
  const productId = getProductId(id);
  const productContainerId = `product-container_${productId}`;
  const salePriceId = `sale-price_${productId}`;
  const qtyId = `qty_${productId}`;
  let qty = Number(document.getElementById(qtyId).textContent);
  const $decrementBtn = document.getElementById(`decrement-btn_${productId}`);
  const $incrementBtn = document.getElementById(`increment-btn_${productId}`);
  const stock = productsMetaData.get(productId);

  if (tagName === 'BUTTON') {
    if (id.includes('remove') && qty === 1) {
      qty -= 1;
      handleQuantityChange(false, salePriceId, qtyId, qty);
      const $child = document.getElementById(productContainerId);
      $productsContainer.removeChild($child);
    } else if (id.includes('increment')) {
      qty += 1;
      updateButtons($decrementBtn, $incrementBtn, qty, stock);
      handleQuantityChange(true, salePriceId, qtyId, qty);
    } else if (id.includes('decrement')) {
      qty -= 1;
      updateButtons($decrementBtn, $incrementBtn, qty, stock);
      handleQuantityChange(false, salePriceId, qtyId, qty);
    }
  }
};
