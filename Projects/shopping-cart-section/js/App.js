import { OrderSummary } from './OrderSummary.js';
import { Product } from './Product.js';
import { updateTotalValue, updateQty, getProductId } from './utils.js';

export class App {
  constructor() {
    this.isEmpty = false;
    this.$appContainer = document.getElementById('app-container');
    this.URL =
      'https://www.greatfrontend.com/api/projects/challenges/e-commerce/cart-sample';
  }

  async fetchProducts() {
    try {
      const response = await fetch(this.URL);
      const { items } = await response.json();
      const products = items.map((product, index) => {
        return new Product(product, index).render();
      });
      return products;
    } catch (error) {
      console.log({ error });
    }
  }

  async initialize() {
    const products = await this.fetchProducts();

    const $title = document.createElement('h1');
    const $contentContainer = document.createElement('section');
    const $productsContainer = document.createElement('div');
    const $orderSummary = new OrderSummary().render();

    $title.textContent = 'Shopping Cart';
    $productsContainer.className = 'products-container';
    $contentContainer.className = 'content-container';

    $contentContainer.addEventListener('click', event => {
      const { id, tagName } = event.target;
      const productId = getProductId(id);
      const salePriceId = `sale-price_${productId}`;
      const qtyId = `qty_${productId}`;
      const productContainerId = `product-container_${productId}`;
      let qty = Number(document.getElementById(qtyId).textContent);
      const $decrementBtn = document.getElementById(
        `decrement-btn_${productId}`
      );

      if (tagName === 'BUTTON') {
        if (id.includes('remove') && qty === '1') {
          qty -= 1;
          updateTotalValue(false, salePriceId);
          updateQty(qtyId, qty);

          const $child = document.getElementById(productContainerId);
          $productsContainer.removeChild($child);
        } else if (id.includes('increment')) {
          qty += 1;
          updateTotalValue(true, salePriceId);
          updateQty(qtyId, qty);

          qty > 1 ? ($decrementBtn.disabled = false) : true;
        } else if (id.includes('decrement')) {
          qty -= 1;
          qty === 1 ? ($decrementBtn.disabled = true) : false;
          updateTotalValue(false, salePriceId);
          updateQty(qtyId, qty);
        }
      }
    });

    $productsContainer.append(...products);
    $contentContainer.append($productsContainer, $orderSummary);
    this.$appContainer.append($title, $contentContainer);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded!');
  const shoppingCartApp = new App();
  shoppingCartApp.initialize();
});
