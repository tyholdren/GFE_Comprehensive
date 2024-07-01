export class Product {
  constructor(data, index) {
    this.data = data;
    this.index = index;
  }

  render() {
    const $productContainer = document.createElement('div');
    const $title = document.createElement('div');
    const $description = document.createElement('div');
    const $image = document.createElement('div');
    const $quantityContainer = document.createElement('div');
    const $quantity = document.createElement('div');
    const $removeBtn = document.createElement('button');
    const $priceContainer = document.createElement('div');
    const $listPrice = document.createElement('div');
    const $salePrice = document.createElement('div');
    const $color = document.createElement('div');
    const $size = document.createElement('div');
    // title
    // description
    // productImage
    // quantityCount
    // remove button
    // list price
    // sale price
    // color
    // size

    console.log(this.data);
  }
}
