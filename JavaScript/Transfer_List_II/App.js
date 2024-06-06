import { Section } from './Section.js';
export class App {
  constructor() {
    this.$appContainer = document.getElementById('app-container');

    this.$middleSection = document.createElement('div');
    this.$leftButton = document.createElement('button');
    this.$leftButton.textContent = 'send left';
    this.$rightButton = document.createElement('button');
    this.$rightButton.textContent = 'send right';
    this.initialLeftData = ['html', 'javascript', 'css', 'typescript'];
    this.initialRightData = ['react', 'angular', 'vue', 'svelte'];
  }

  initialize() {
    const $sendLeftBtn = document.createElement('button');
    const $sendRightBtn = document.createElement('button');
    $sendLeftBtn.textContent = 'send left';
    $sendRightBtn.textContent = 'send right';

    const $leftSection = new Section(this.initialLeftData).render();
    const $rightSection = new Section(this.initialRightData).render();

    $leftSection.classList.add('section');
    this.$middleSection.classList.add('section');
    $rightSection.classList.add('section');

    this.$middleSection.append($sendLeftBtn, $sendRightBtn);
    this.$appContainer.append($leftSection, this.$middleSection, $rightSection);
    return this.$appContainer;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myApp = new App();
  myApp.initialize();
});
