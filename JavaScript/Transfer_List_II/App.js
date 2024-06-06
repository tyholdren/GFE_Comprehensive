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
    this.toSendLeft = [];
    this.toSendRight = [];
  }

  initialize() {
    const $sendLeftBtn = document.createElement('button');
    const $sendRightBtn = document.createElement('button');
    $sendLeftBtn.textContent = 'send left';
    $sendRightBtn.textContent = 'send right';

    $sendRightBtn.addEventListener('click', () => {
      this.handleSendRight();
    });

    const $leftSection = new Section(
      this.initialLeftData,
      'left-section'
    ).render();
    const $rightSection = new Section(
      this.initialRightData,
      'right-section'
    ).render();

    $leftSection.addEventListener('click', event => {
      if (event.target.id) {
        const parentNodeId = event.target.parentNode.id;
        // console.log({ parentNodeId });
        this.toggleToTransfer(parentNodeId, 'left-section');
      }
    });

    $rightSection.addEventListener('click', event => {
      if (event.target.id) {
        this.toggleToTransfer(parentNodeId, 'right-section');
      }
    });

    $leftSection.classList.add('section');
    this.$middleSection.classList.add('section');
    $rightSection.classList.add('section');

    this.$middleSection.append($sendLeftBtn, $sendRightBtn);
    this.$appContainer.append($leftSection, this.$middleSection, $rightSection);
    return this.$appContainer;
  }

  handleSendRight() {
    const removedChildren = [];
    if (this.toSendRight.length) {
      const parent = document.getElementById('left-section-data-container');
      this.toSendRight.forEach(childId => {
        const childNode = document.getElementById(childId);
        const removedChild = parent.removeChild(childNode);
        removedChildren.push(removedChild);
      });
    }
    const fragment = document.createDocumentFragment();
    fragment.append(...removedChildren);
    this.toSendLeft = [this.toSendLeft, ...removedChildren];
    const rightDataContainer = document.getElementById(
      'right-section-data-container'
    );
    rightDataContainer.append(fragment);
    this.toSendRight = [];
  }

  toggleToTransfer(targetId, section) {
    const sectionMap = {
      'left-section': 'toSendRight',
      'right-section': 'toSendLeft',
    };

    const targetArray = this[sectionMap[section]];
    if (targetArray.includes(targetId)) {
      this[sectionMap[section]] = targetArray.filter(id => id !== targetId);
    } else {
      this[sectionMap[section]].push(targetId);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myApp = new App();
  myApp.initialize();
});
