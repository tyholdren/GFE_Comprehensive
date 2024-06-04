import { Cell } from './Cell.js';
export class App {
  constructor() {
    this.$appContainer = document.getElementById('app-container');
    this.config = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];
    this.activatedCells = [];
    this.isDeactivating = false;
  }

  initialize() {
    const fragment = document.createDocumentFragment();
    const grid = this.config.flat().map((data, index) => {
      if (data) {
        const curCell = new Cell(data, index);
        const $cellEl = curCell.render();
        return $cellEl;
      } else {
        return document.createElement('span');
      }
    });
    fragment.append(...grid);
    this.$appContainer.append(fragment);
    this.$appContainer.addEventListener('click', event => {
      if (event.target.textContent === 'cell') {
        const activeCell = event.target;
        this.activateCell(activeCell);
      }
    });
    return this.$appContainer;
  }

  activateCell(cell) {
    this.activatedCells.push(cell);
    cell.isDisabled = true;
    cell.classList.add('active-cell');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myApp = new App();
  myApp.initialize();
});
