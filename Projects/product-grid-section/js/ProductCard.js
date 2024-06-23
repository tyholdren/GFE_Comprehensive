import { COLOR_VALUES } from './utils.js';

export class ProductCard {
  constructor(data, index) {
    this.data = data;
    this.imgId = `product-card-${index}`;
    this.colors = {};
    this.selectedColor = null;
  }

  setInitialColors(images) {
    images.forEach(({ color, image_url }) => {
      if (!this.colors.hasOwnProperty(color)) {
        this.colors[color] = image_url;
      }
    });
  }

  updateSelection(imgId, newColor) {
    this.updateCurrentColor(newColor);
    const curImg = document.getElementById(imgId);
    curImg.src = this.colors[newColor];
  }

  updateCurrentColor(newColor) {
    const curColor = document.getElementById(this.selectedColor.id);
    curColor.textContent = newColor[0].toUpperCase() + newColor.slice(1);
  }

  render() {
    console.log(this.data);
    const { product_id, name, colors, images, priceRange } = this.data;

    this.setInitialColors(images);

    if (this.selectedColor === null) {
      const colorObj = {};
      colorObj.id = `${this.imgId}-color`;
      colorObj.color = colors[0];
      this.selectedColor = colorObj;
    }

    const $productContainer = document.createElement('div');
    const $imgContainer = document.createElement('div');
    const $productImg = document.createElement('img');
    $productImg.id = this.imgId;
    const $selectedColor = document.createElement('div');
    const $name = document.createElement('div');
    const $price = document.createElement('div');
    const $colorsContainer = document.createElement('div');

    const colorsMap = colors.map(curColor => {
      const $colorBtn = document.createElement('button');
      $colorBtn.addEventListener('click', () => {
        this.updateSelection(this.imgId, curColor);
      });
      $colorBtn.style.backgroundColor = COLOR_VALUES[curColor.toUpperCase()];
      $colorBtn.className = 'color-btn';
      return $colorBtn;
    });

    $colorsContainer.className = 'products-container__colors-container';
    $colorsContainer.append(...colorsMap);

    $imgContainer.append($productImg);
    $productImg.src = this.colors[this.selectedColor.color];
    $productImg.alt = product_id;
    $selectedColor.id = this.selectedColor.id;
    $selectedColor.textContent =
      this.selectedColor.color[0].toUpperCase() +
      this.selectedColor.color.slice(1);
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
