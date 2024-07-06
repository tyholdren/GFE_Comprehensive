export class QuantityButton {
  constructor(productPrice, product_id) {
    this.productPrice = productPrice;
    this.productId = product_id;
  }

  render() {
    const $qtyContainer = document.createElement('div');
    const $decrementBtn = document.createElement('button');
    const $qty = document.createElement('div');
    const $incrementBtn = document.createElement('button');

    $decrementBtn.textContent = '-';
    $qty.textContent = 1;
    $incrementBtn.textContent = '+';

    $decrementBtn.id = `decrement-btn_${this.productId}`;
    $incrementBtn.id = `increment-btn_${this.productId}`;

    $qty.id = `qty_${this.productId}`;
    $qtyContainer.className = 'qty-btn-container';
    $qtyContainer.append($decrementBtn, $qty, $incrementBtn);
    return $qtyContainer;
  }
}
