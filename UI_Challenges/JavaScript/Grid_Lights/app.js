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
    this.intervalId = null;
    this.limit = this.config.flat().filter(Boolean).length;
  }

  initialize() {
    this.$appContainer.style.gridTemplateColumns = `repeat(${this.config[0].length}, 0fr)`;
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
      if (event.target.tagName === 'BUTTON') {
        const activeCell = event.target;
        this.activateCell(activeCell);
      }
    });
    return this.$appContainer;
  }

  activateCell(cell) {
    this.activatedCells.push(cell.id);
    cell.isDisabled = true;
    cell.classList.add('active-cell');
    if (this.activatedCells.length === this.limit) {
      this.deactivateCells();
    }
  }

  deactivateCells() {
    this.intervalId = setInterval(() => {
      const deactivatedCell =
        this.activatedCells[this.activatedCells.length - 1];
      const $deactivatedCell = document.getElementById(deactivatedCell);
      $deactivatedCell.classList.remove('active-cell');
      this.activatedCells = this.activatedCells.slice(
        0,
        this.activatedCells.length - 1
      );
      if (this.activatedCells.length === 0) {
        return clearInterval(this.intervalId);
      }
    }, 500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myApp = new App();
  myApp.initialize();
});
