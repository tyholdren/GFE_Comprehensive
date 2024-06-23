import { ProductCard } from './ProductCard.js';

class App {
  constructor() {
    this.URL =
      'https://www.greatfrontend.com/api/projects/challenges/e-commerce/products';
    this.$appContainer = document.getElementById('app-container');
  }

  async initialize() {
    const products = await this.fetchProducts();
    console.log({ products });
    const _products = products.data.map(el => {
      return new ProductCard(el).render();
    });
    console.log({ _products });
    this.$appContainer.append(..._products);
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
