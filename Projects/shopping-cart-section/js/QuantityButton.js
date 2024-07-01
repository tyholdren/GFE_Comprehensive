export class QuantityButton {
  constructor() {}

  render() {
    const $qtyContainer = document.createElement('div');
    const $decrementBtn = document.createElement('button');
    const $qty = document.createElement('div');
    const $incrementBtn = document.createElement('button');

    $decrementBtn.textContent = '-';
    $qty.textContent = '0';
    $incrementBtn.textContent = '+';

    $qtyContainer.className = 'qty-btn-container';
    $qtyContainer.append($decrementBtn, $qty, $incrementBtn);
    return $qtyContainer;
  }
}
