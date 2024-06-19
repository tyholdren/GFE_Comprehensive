import { Table } from './Table.js';

class App {
  constructor() {}

  initialize() {
    const billingHistory = this.fetchData();
    const table = new Table(billingHistory);
    const $table = table.render();
  }

  async fetchData() {
    const response = await fetch(
      'https://www.greatfrontend.com/api/projects/challenges/account/billing/history'
    );
    const billingHistory = await response.json();
    console.log({ billingHistory });
    return billingHistory;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is loaded');
  const myApp = new App();
  myApp.initialize();
});
