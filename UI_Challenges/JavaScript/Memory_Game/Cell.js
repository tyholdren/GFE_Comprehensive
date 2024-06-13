export class Cell {
  constructor(value, index) {
    this.id = index;
    this.value = value;
    this.isActive = false;
  }
  render() {
    const $btn = document.createElement('button');
    $btn.id = `cell-${this.id}`;
    $btn.value = this.value;
    $btn.classList.add('cell');
    $btn.textContent = 'X';
    return $btn;
  }
}
