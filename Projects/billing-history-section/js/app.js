class App {
  constructor() {}

  initialize() {
    this.fetchData();
  }

  async fetchData() {
    const response = await fetch(
      'https://www.greatfrontend.com/api/projects/challenges/account/billing/history'
    );
    const billingHistory = await response.json();
    console.log({ billingHistory });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is loaded');
  const myApp = new App();
  myApp.initialize();
});
