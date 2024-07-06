import { handleEvent } from './eventHandlers.js';
import { OrderSummary } from './OrderSummary.js';
import { Product } from './Product.js';
import { updateTotalValue, updateQty, getProductId } from './utils.js';

export class App {
  constructor() {
    this.isEmpty = false;
    this.$appContainer = document.getElementById('app-container');
    this.productsMetaData = new Map();
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
      items.forEach(({ product, unit }) => {
        this.productsMetaData.set(product.product_id, unit.stock);
      });
      console.log(this.productsMetaData);
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

    $contentContainer.addEventListener('click', event =>
      handleEvent(event, this.productsMetaData, $productsContainer)
    );

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
