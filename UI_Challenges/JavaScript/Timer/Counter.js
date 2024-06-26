export class Counter {
  constructor() {
    this.$appContainer = document.getElementById('app-container');
    this.intervalId = null;
    this.count = 3601;
    this.formattedCount = '01 : 00 : 01';
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
    const hours = Math.floor(this.count / 3600);
    const mins = Math.floor((this.count % 3600) / 60);
    const seconds = this.count % 60;
    this.formattedCount = `${hours.toString().padStart(2, '0')} : ${mins
      .toString()
      .padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
  }

  initialize() {
    const $count = document.createElement('div');
    $count.id = 'counter';
    $count.textContent = this.formattedCount;

    this.$appContainer.append($count);
    this.intervalId = setInterval(() => {
      this.decrementCount();
      if (this.count === 0) {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('dom loaded');
  const myCounter = new Counter();
  myCounter.initialize();
});
