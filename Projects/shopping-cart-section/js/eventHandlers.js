import { updateTotalValue, updateQty, getProductId } from './utils.js';

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
      updateTotalValue(false, salePriceId);
      updateQty(qtyId, qty);

      const $child = document.getElementById(productContainerId);
      $productsContainer.removeChild($child);
    } else if (id.includes('increment')) {
      qty += 1;
      updateTotalValue(true, salePriceId);
      updateQty(qtyId, qty);

      $incrementBtn.disabled = qty === stock ? true : false;
      $decrementBtn.disabled = qty > 1 ? false : true;
    } else if (id.includes('decrement')) {
      qty -= 1;
      $decrementBtn.disabled = qty === 1 ? true : false;
      $incrementBtn.disabled = qty === stock ? true : false;
      updateTotalValue(false, salePriceId);
      updateQty(qtyId, qty);
    }
  }
};
