import { Section } from './Section.js';
import { SectionStatus } from './SectionStatus.js';
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
      this.transferData(
        this.toSendRight,
        this.toSendLeft,
        'left-section-data-container',
        'right-section-data-container'
      );
    });

    $sendLeftBtn.addEventListener('click', () => {
      this.transferData(
        this.toSendLeft,
        this.toSendRight,
        'right-section-data-container',
        'left-section-data-container'
      );
    });

    const $leftStatus = new SectionStatus(this.toSendRight, 'left').render();
    const $leftData = new Section(
      this.initialLeftData,
      'left-section'
    ).render();

    const $leftSection = document.createElement('div');
    $leftSection.append($leftStatus, $leftData);

    const $rightStatus = new SectionStatus(this.toSendLeft, 'right').render();
    const $rightData = new Section(
      this.initialRightData,
      'right-section'
    ).render();

    const $rightSection = document.createElement('div');
    $rightSection.append($rightStatus, $rightData);

    $leftSection.addEventListener('click', event => {
      if (event.target.id) {
        const parentNodeId = event.target.parentNode.id;
        this.toggleToTransfer(parentNodeId, 'left-section');
        this.updateStatus(this.toSendRight, 'left');
      }
    });

    $rightSection.addEventListener('click', event => {
      if (event.target.id) {
        const parentNodeId = event.target.parentNode.id;
        this.toggleToTransfer(parentNodeId, 'right-section');
        this.updateStatus(this.toSendLeft, 'right');
      }
    });

    $leftSection.classList.add('section');
    this.$middleSection.classList.add('section');
    $rightSection.classList.add('section');

    this.$middleSection.append($sendLeftBtn, $sendRightBtn);
    this.$appContainer.append($leftSection, this.$middleSection, $rightSection);
    return this.$appContainer;
  }

  updateStatus(transferContainer, section) {
    const statusNode = document.getElementById(
      `${section}-section-status-label`
    );
    statusNode.textContent = `${transferContainer.length}/4 Selected`;
  }

  transferData(
    transferContainer,
    oppositeTransferContainer,
    curSectionContainer,
    transferToContainer
  ) {
    const removedChildren = [];

    if (transferContainer.length) {
      const parent = document.getElementById(curSectionContainer);
      transferContainer.forEach(childId => {
        oppositeTransferContainer.push(childId);
        const childNode = document.getElementById(childId);
        const removedChild = parent.removeChild(childNode);
        removedChildren.push(removedChild);
      });
    }
    const fragment = document.createDocumentFragment();
    fragment.append(...removedChildren);
    const oppositeContainer = document.getElementById(transferToContainer);
    oppositeContainer.append(fragment);
    transferContainer.length = 0;
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
