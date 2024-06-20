import { CONTENT_TYPE } from './utils.js';
import { Table } from './Table.js';

class App {
  constructor() {
    this.appContainer = document.getElementById('app-container');
  }

  async initialize() {
    const billingHistory = await this.fetchData();
    const data = billingHistory.data.map(el => {
      return {
        [CONTENT_TYPE.INVOICE]: el.created_at,
        [CONTENT_TYPE.STATUS]: el.status,
        [CONTENT_TYPE.AMOUNT]: el.amount,
        [CONTENT_TYPE.PLAN_TYPE]: el.plan,
        [CONTENT_TYPE.LINK]: el.invoice_url,
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
