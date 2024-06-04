import { Cell } from './Cell.js';
export class App {
  constructor() {
    this.$appContainer = document.getElementById('app-container');
    this.config = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];
    this.isDeactivating = false;
  }

  initialize() {
    const fragment = document.createDocumentFragment();
    const grid = this.config.flat().map(data => {
      const curCell = new Cell(data);
      const $cellEl = curCell.render();
      return $cellEl;
    });
    fragment.append(...grid);
    this.$appContainer.append(fragment);
    return this.$appContainer;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myApp = new App();
  myApp.initialize();
});
