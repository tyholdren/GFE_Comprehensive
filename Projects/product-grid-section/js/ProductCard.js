import { COLOR_VALUES } from './utils.js';

export class ProductCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    console.log(this.data);
    const { product_id, name, colors, images, priceRange } = this.data;

    const $productContainer = document.createElement('div');
    const $imgContainer = document.createElement('div');
    const $productImg = document.createElement('img');
    const $selectedColor = document.createElement('div');
    const $name = document.createElement('div');
    const $price = document.createElement('div');
    const $colorsContainer = document.createElement('div');

    const colorsMap = colors.map(curColor => {
      const $colorBtn = document.createElement('button');
      $colorBtn.addEventListener('click', () => {
        console.log(curColor);
      });
      $colorBtn.style.backgroundColor = COLOR_VALUES[curColor.toUpperCase()];
      $colorBtn.className = 'color-btn';
      return $colorBtn;
    });

    const primaryColor = colors[0];

    $colorsContainer.className = 'products-container__colors-container';
    $colorsContainer.append(...colorsMap);

    $imgContainer.append($productImg);
    $productImg.src = images[0].image_url;
    $productImg.alt = product_id;
    $selectedColor.textContent =
      primaryColor[0].toUpperCase() + primaryColor.slice(1);
    $name.textContent = name;
    $price.textContent = `$${priceRange.highest}`;

    $price.className = 'product-container__product-price';
    $name.className = 'product-container__name';
    $selectedColor.className = 'product-container__selected-color';
    $productContainer.className = 'product-container';

    $imgContainer.className = 'product-container__img-container';
    $productImg.className = 'product-container__img';

    $productContainer.append(
      $imgContainer,
      $selectedColor,
      $name,
      $price,
      $colorsContainer
    );
    return $productContainer;
  }
}
