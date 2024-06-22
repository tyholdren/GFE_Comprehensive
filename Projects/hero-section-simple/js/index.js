class App {
  constructor() {
    this.$appwrapper = document.getElementById('app-wrapper');
  }

  initialize() {
    const $title = document.createElement('h1');
    const $subtitle = document.createElement('h3');
    const $learnMoreLink = document.createElement('a');
    const $seePricingLink = document.createElement('a');
    const $mainImage = document.createElement('img');
    const $contentWrapper = document.createElement('div');
    const $imageWrapper = document.createElement('div');
    const $linkWrapper = document.createElement('div');

    $contentWrapper.classList.add('content-wrapper');
    $title.classList.add('content-wrapper__title');
    $subtitle.classList.add('content-wrapper__subtitle');
    $imageWrapper.classList.add('image-wrapper');
    $linkWrapper.classList.add('link-wrapper');

    $title.textContent = 'Well crafted abstract images';
    $subtitle.textContent =
      'High quality abstract images for your projects, wallpaper and presentations.';
    $learnMoreLink.textContent = 'Learn more';
    $learnMoreLink.href = 'http://';
    $learnMoreLink.target = 'blank';
    $learnMoreLink.classList.add('link-wrapper__link--secondary');
    $seePricingLink.textContent = 'See pricing';
    $seePricingLink.href = 'http://';
    $seePricingLink.target = 'blank';
    $seePricingLink.classList.add('link-wrapper__link--primary');
    $mainImage.src = './img/prism.png';
    $mainImage.alt = 'main image';

    $linkWrapper.append($learnMoreLink, $seePricingLink);
    $contentWrapper.append($title, $subtitle, $linkWrapper);
    $imageWrapper.append($mainImage);

    this.$appwrapper.append($contentWrapper, $imageWrapper);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  'dom is loaded!';
  const myApp = new App();
  myApp.initialize();
});
