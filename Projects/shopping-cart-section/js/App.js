import { OrderSummary } from './OrderSummary.js';
import { Product } from './Product.js';

export class App {
  constructor() {
    this.isEmpty = false;
    this.$appContainer = document.getElementById('app-container');
    this.URL =
      'https://www.greatfrontend.com/api/projects/challenges/e-commerce/cart-sample';
  }

  updateTotalValue(addingProduct, productId) {
    let $totalPrice = document.getElementById('total-value');
    const existingPrice = Number($totalPrice.textContent.slice(1));
    const salePrice = Number(document.getElementById(productId).textContent);

    const newPrice = addingProduct
      ? existingPrice + salePrice
      : existingPrice - salePrice;

    $totalPrice.textContent = '$' + String(newPrice);
  }

  updateQty(addingProduct, qtyId) {
    let $qty = document.getElementById(qtyId);
    const $exgQty = Number($qty.textContent);
    $qty.textContent = addingProduct ? $exgQty + 1 : $exgQty - 1;
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

  getProductId(id) {
    return id.split('_')[1];
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
      const productId = this.getProductId(id);

      if (tagName === 'BUTTON') {
        if (id.includes('remove')) {
          console.log('removing');
        } else if (id.includes('increment')) {
          const salePriceId = `sale-price_${productId}`;
          this.updateTotalValue(true, salePriceId);
          this.updateQty(true, qtyId);
        } else if (id.includes('decrement')) {
          const qtyId = `qty_${productId}`;
          this.updateTotalValue(false, salePriceId);
          this.updateQty(false, qtyId);
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
