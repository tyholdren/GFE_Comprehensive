import { Product } from './Product.js';

export class App {
  constructor() {
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
    console.log({ products });
    const $productsContainer = document.createElement('div');
    const $orderSummaryContainer = document.createElement('div');

    $productsContainer.append(...products);
    this.$appContainer.append($productsContainer, $orderSummaryContainer);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded!');
  const shoppingCartApp = new App();
  shoppingCartApp.initialize();
});
