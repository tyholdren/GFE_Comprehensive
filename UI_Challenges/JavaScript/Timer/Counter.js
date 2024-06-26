export class Counter {
  constructor() {
    this.$appContainer = document.getElementById('app-container');
    this.count = 125;
    this.formattedCount = '2 : 05';
  }

  decrementCount() {
    if (this.count === 0) {
      this.count = 120;
    } else {
      this.count -= 1;
    }
    this.formatSeconds(this.count);

    const countId = document.getElementById('counter');
    countId.textContent = this.formattedCount;
  }

  formatSeconds() {
    const mins = Math.floor(this.count / 60);
    const seconds = String(this.count - 60 * mins);
    this.formattedCount = `${mins} : ${seconds.padStart(2, '0')}`;
  }

  initialize() {
    const $count = document.createElement('div');
    $count.id = 'counter';
    $count.textContent = this.formattedCount;

    this.$appContainer.append($count);
    this.intervalId = setInterval(() => {
      this.decrementCount();
    }, 1000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('dom loaded');
  const myCounter = new Counter();
  myCounter.initialize();
});
