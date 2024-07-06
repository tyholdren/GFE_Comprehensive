export class OrderSummary {
  constructor() {}

  render() {
    const $orderSummaryContainer = document.createElement('div');
    const $heading = document.createElement('h2');
    const $subTotal = document.createElement('span');
    const $shipping = document.createElement('span');
    const $addCoupon = document.createElement('span');
    const $total = document.createElement('span');
    const $totalValue = document.createElement('span');
    const $checkoutBtn = document.createElement('button');

    $heading.textContent = 'Order Summary';
    $subTotal.textContent = 'Subtotal';
    $shipping.textContent = 'Shipping';
    $addCoupon.textContent = 'Add Coupon Code';
    $total.textContent = 'Total';
    $totalValue.textContent = '$162.50';
    $checkoutBtn.textContent = 'Checkout';

    $totalValue.id = 'total-value';

    $orderSummaryContainer.className = 'order-summary-container';
    $orderSummaryContainer.append(
      $heading,
      $subTotal,
      $shipping,
      $addCoupon,
      $total,
      $totalValue,
      $checkoutBtn
    );
    return $orderSummaryContainer;
  }
}
