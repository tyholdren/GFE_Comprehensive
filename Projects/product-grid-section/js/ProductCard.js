export class ProductCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    console.log(this.data);
    const { product_id, name, colors, images, priceRange } = this.data;

    const $productContainer = document.createElement('div');
    const $productImg = document.createElement('img');
    const $productColor = document.createElement('div');
    const $productName = document.createElement('div');
    const $productPrice = document.createElement('div');
    const $productColorOptions = document.createElement('img');

    $productImg.src = images[0].image_url;
    $productImg.alt = product_id;
    $productColor.textContent = colors[0];
    $productName.textContent = name;
    $productPrice.textContent = `$${priceRange.highest}`;

    $productContainer.className = 'product-container';

    $productContainer.append(
      $productImg,
      $productColor,
      $productName,
      $productPrice,
      $productColorOptions
    );
    return $productContainer;
  }
}
