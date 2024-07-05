import { debounce } from './utils.js';
import { Item } from './Item.js';

export class App {
  constructor() {
    this.url = 'https://api.frontendeval.com/fake/food/';
    this.$searchBox = document.getElementById('search-box');
    this.$resultsContainer = document.getElementById('results-container');
    this.$list = document.createElement('ul');
    this.debouncedFetch = debounce(this.fetchItems, 500);
    this.savedItems = document.getElementById('saved-items');
  }

  async fetchItems(input) {
    try {
      const endpoint = this.url + input;
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log({ data });
      this.renderItems(data);
    } catch (error) {
      console.log({ error });
    }
  }

  renderItems(data) {
    const results = data.map(item => {
      const $searchResult = document.createElement('li');
      $searchResult.textContent = item;
      $searchResult.addEventListener('click', event => {
        console.log(event.target.value);
        this.addItemToList(event.target.textContent);
      });
      return $searchResult;
    });
    this.$list.textContent = '';
    this.$list.append(...results);
    this.$resultsContainer.append(this.$list);
  }

  addItemToList(data) {
    const $savedItems = document.getElementById('saved-items');
    const $item = new Item(data).render();
    $savedItems.append($item);
  }

  async initialize() {
    this.$searchBox.addEventListener('input', event => {
      this.debouncedFetch(event.target.value);
    });
    this.fetchItems();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myApp = new App();
  myApp.initialize();
});
