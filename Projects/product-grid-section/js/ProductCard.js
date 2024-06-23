export class ProductCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    console.log(this.data);
    const $productContainer = document.createElement('div');
    const $productImage = document.createElement('img');
    const $productColor = document.createElement('div');
    const $productTitle = document.createElement('div');
    const $productPrice = document.createElement('div');
    const $productColorOptions = document.createElement('img');

    $productContainer.textContent = this.data.name;
    return $productContainer;
  }
}
