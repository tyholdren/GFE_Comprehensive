import { Cell } from './Cell.js';

export class App {
  constructor() {
    this.config = [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [0, 1, 2, 3],
      [4, 5, 6, 7],
    ];
    this.selection = [];
    this.isThrottled = false;
    this.timeoutId = null;
    this.count = 0;
    this.limit = this.config.flat().length;
    this.appContainer = document.getElementById('app-container');
  }

  initialize() {
    const fragment = document.createDocumentFragment();
    const cells = this.config.flat().map((value, index) => {
      return new Cell(value, index).render();
    });

    fragment.append(...cells);
    this.appContainer.append(fragment);
    this.appContainer.style.gridTemplateColumns = `repeat(${this.config[0].length}, 0fr)`;
    this.appContainer.addEventListener('click', event => {
      if (!this.isThrottled && event.target.tagName === 'BUTTON') {
        const $selectedCell = document.getElementById(event.target.id);
        $selectedCell.disabled = true;
        this.revealCell($selectedCell);
      }
    });
    return this.appContainer;
  }

  revealCell(selectedCell) {
    this.selection.push(selectedCell);
    selectedCell.textContent = selectedCell.value;
    if (this.selection.length === 2) {
      this.throttle();
    } else {
      selectedCell.isActive = true;
    }
  }

  checkWin() {
    if (this.count === this.limit) {
      this.appContainer.textContent = '';
      const $winEl = document.createElement('div');
      $winEl.textContent = 'Game Over!';
      this.appContainer.append($winEl);
    }
  }

  throttle() {
    this.isThrottled = true;
    this.timeoutId = setTimeout(() => {
      this.isThrottled = false;
      this.checkSelection();
      clearTimeout(this.timeoutId);
    }, 3000);
  }

  checkSelection() {
    const [el1, el2] = this.selection;
    const $el1 = document.getElementById(el1.id);
    const $el2 = document.getElementById(el2.id);
    if (el1.value === el2.value) {
      $el1.classList.add('blank-cell');
      $el2.classList.add('blank-cell');
      this.count += 2;
      this.checkWin();
    } else {
      $el1.textContent = 'X';
      $el2.textContent = 'X';
      $el1.disabled = false;
      $el2.disabled = false;
    }
    this.selection = [];
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myApp = new App();
  myApp.initialize();
});
