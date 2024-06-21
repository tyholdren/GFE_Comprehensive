class App {
  constructor() {
    this.$appContainer = document.getElementById('app-container');
  }

  initialize() {
    const $title = document.createElement('h1');
    const $subtitle = document.createElement('h3');
    const $learnMoreBtn = document.createElement('button');
    const $seePricingBtn = document.createElement('button');
    const $mainImage = document.createElement('img');
    const $contentWrapper = document.createElement('div');
    const $imageWrapper = document.createElement('div');
    const $btnWrapper = document.createElement('div');

    $title.textContent = 'Well crafted abstract images';
    $subtitle.textContent =
      'High quality abstract images for your projects, wallpaper and presentations.';
    $learnMoreBtn.textContent = 'Learn more';
    $seePricingBtn.textContent = 'See pricing';
    $mainImage.src = './img/prism.png';
    $mainImage.alt = 'main image';

    $btnWrapper.append($learnMoreBtn, $seePricingBtn);
    $contentWrapper.append($title, $subtitle, $btnWrapper);

    $imageWrapper.append($mainImage);

    this.$appContainer.append($contentWrapper, $imageWrapper);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  'dom is loaded!';
  const myApp = new App();
  myApp.initialize();
});
