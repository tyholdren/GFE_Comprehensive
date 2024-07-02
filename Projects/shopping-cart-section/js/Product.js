import { QuantityButton } from './QuantityButton.js';

export class Product {
  constructor(data, index) {
    this.data = data;
    this.index = index;
  }

  render() {
    const { product, unit } = this.data;
    const { description, name, product_id } = product;
    const { color, image_url, list_price, sale_price, size, sku, stock } = unit;

    const $productContainer = document.createElement('div');
    // const $imageContainer = document.createElement('div');
    const $image = document.createElement('img');
    const $contentContainer = document.createElement('div');
    const $title = document.createElement('div');
    const $color = document.createElement('div');
    const $size = document.createElement('div');
    const $description = document.createElement('div');
    const $quantity = new QuantityButton(sale_price, product_id).render();
    const $removeBtn = document.createElement('button');
    const $priceContainer = document.createElement('div');
    const $listPrice = document.createElement('div');
    const $salePrice = document.createElement('div');

    $image.src = image_url;
    $image.className = 'image';
    $title.textContent = name;
    $color.textContent = color;
    $size.textContent = size;
    $description.textContent = description;
    $removeBtn.textContent = 'Remove';
    $listPrice.textContent = list_price;
    $salePrice.textContent = sale_price;

    $contentContainer.append(
      $title,
      $color,
      $size,
      $description,
      $quantity,
      $removeBtn,
      $salePrice,
      $listPrice
    );

    $productContainer.className = 'product-container';
    $productContainer.append($image, $contentContainer);
    return $productContainer;
  }
}
