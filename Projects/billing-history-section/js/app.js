import { Table } from './Table.js';

class App {
  constructor() {
    this.appContainer = document.getElementById('app-container');
  }

  async initialize() {
    const billingHistory = await this.fetchData();
    const table = new Table(billingHistory.data);
    const $table = table.render();
    this.appContainer.append($table);
    return this.appContainer;
  }

  async fetchData() {
    const response = await fetch(
      'https://www.greatfrontend.com/api/projects/challenges/account/billing/history'
    );
    const billingHistory = await response.json();
    console.log(billingHistory.data);
    return billingHistory;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is loaded');
  const myApp = new App();
  myApp.initialize();
});
