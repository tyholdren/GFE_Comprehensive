export class ProductCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    const $productContainer = document.createElement('div');
    $productContainer.textContent = this.data.name;
    return $productContainer;
  }
}
