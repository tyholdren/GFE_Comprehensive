export class Item {
  constructor(data) {
    this.data = data;
    this.isActive = true;
  }

  render() {
    const $itemContainer = document.createElement('div');
    const $item = document.createElement('div');
    $item.textContent = this.data;
    $itemContainer.id = `item-${this.data}`;

    const $checkBtn = document.createElement('button');
    const $deleteBtn = document.createElement('button');
    $checkBtn.textContent = 'check';
    $deleteBtn.textContent = 'X';

    $itemContainer.className = 'item-container';

    $deleteBtn.addEventListener('click', () => {
      const $savedItems = document.getElementById('saved-items');
      const $child = document.getElementById(`item-${this.data}`);
      $savedItems.removeChild($child);
    });

    $checkBtn.addEventListener('click', () => {
      this.isActive = !this.isActive;
      if (!this.isActive) {
        $item.classList.add('inactive-item');
      } else {
        $item.classList.remove('inactive-item');
      }
    });

    $itemContainer.append($checkBtn, $item, $deleteBtn);
    return $itemContainer;
  }
}
