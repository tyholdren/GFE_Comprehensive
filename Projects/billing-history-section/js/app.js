import { Table } from './Table.js';

class App {
  constructor() {
    this.appContainer = document.getElementById('app-container');
  }

  async initialize() {
    const billingHistory = await this.fetchData();

    const data = billingHistory.data.map(el => {
      return {
        date: el.created_at,
        status: el.status,
        amount: el.amount,
        plan: el.plan,
        link: el.invoice_url,
      };
    });

    const $table = new Table(data).render();
    this.appContainer.append($table);
  }

  async fetchData() {
    const response = await fetch(
      'https://www.greatfrontend.com/api/projects/challenges/account/billing/history'
    );
    const data = await response.json();
    return data;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is loaded');
  const myApp = new App();
  myApp.initialize();
});
