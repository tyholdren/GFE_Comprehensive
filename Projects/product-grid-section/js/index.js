import { ProductCard } from './ProductCard.js';

class App {
  constructor() {
    this.URL =
      'https://www.greatfrontend.com/api/projects/challenges/e-commerce/products';
    this.$appContainer = document.getElementById('app-container');
  }

  async initialize() {
    const products = await this.fetchProducts();
    const _products = products.data.map(el => {
      return new ProductCard(el).render();
    });

    const $headerContainer = document.createElement('section');
    const $headerTitle = document.createElement('span');
    const $viewAllBtn = document.createElement('button');
    const $productsContainer = document.createElement('section');

    $productsContainer.className = 'products-container';

    $headerTitle.textContent = 'Latest Arrivals';
    $viewAllBtn.textContent = 'View all';
    $headerContainer.append($headerTitle, $viewAllBtn);
    $productsContainer.append(..._products);
    this.$appContainer.append($headerContainer, $productsContainer);
  }

  async fetchProducts() {
    try {
      const response = await fetch(this.URL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log({ error });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('dom is loaded');
  const myApp = new App();
  myApp.initialize();
});
