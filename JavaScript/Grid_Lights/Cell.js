export class Cell {
  constructor(data, index) {
    this.data = data;
    this.index = index;
    this.isDisabled = false;
  }

  render() {
    const $button = document.createElement('button');
    $button.classList.add('cell');
    $button.textContent = 'cell';
    $button.id = `cell-${this.index}`;
    return $button;
  }
}
