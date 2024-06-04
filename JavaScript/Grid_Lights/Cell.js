export class Cell {
  constructor(data) {
    this.data = data;
  }

  render() {
    const $button = document.createElement('button');
    $button.classList.add('cell');
    $button.textContent = 'button';
    return $button;
  }
}
