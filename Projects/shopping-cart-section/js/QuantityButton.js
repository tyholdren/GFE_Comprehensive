export class QuantityButton {
  constructor(productPrice, product_id) {
    this.productPrice = productPrice;
    this.productId = product_id;
  }

  updateTotalValue(addProduct) {
    let $totalPrice = document.getElementById('total-value');
    let $qty = document.getElementById(`${this.productId}-qty`);
    const existingPrice = Number($totalPrice.textContent.slice(1));

    const newPrice = addProduct
      ? existingPrice + this.productPrice
      : existingPrice - this.productPrice;

    $totalPrice.textContent = '$' + String(newPrice);

    $qty.textContent = addProduct
      ? Number($qty.textContent) + 1
      : Number($qty.textContent - 1);
  }

  render() {
    const $qtyContainer = document.createElement('div');
    const $decrementBtn = document.createElement('button');
    const $qty = document.createElement('div');
    const $incrementBtn = document.createElement('button');

    $decrementBtn.textContent = '-';
    $qty.textContent = 0;
    $incrementBtn.textContent = '+';

    $decrementBtn.addEventListener('click', () => {
      this.updateTotalValue(false);
    });

    $incrementBtn.addEventListener('click', () => {
      this.updateTotalValue(true);
    });

    $qty.id = `${this.productId}-qty`;
    $qtyContainer.className = 'qty-btn-container';
    $qtyContainer.append($decrementBtn, $qty, $incrementBtn);
    return $qtyContainer;
  }
}
