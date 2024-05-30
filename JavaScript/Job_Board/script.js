import { Post } from './Post.js';

export class App {
  constructor() {
    this.appContainer = document.getElementById('app-container');
    this.jobIds = [];
    this.limit = 0;
    this.url = 'https://hacker-news.firebaseio.com/v0/jobstories.json';
  }

  async initialize() {
    const header = document.createElement('h1');
    header.textContent = 'Hacker News Jobs Board';
    this.appContainer.append(header);

    this.jobIds = await this.fetchJobIds();
    const curSelection = this.jobIds.slice(this.limit, this.limit + 6);
    this.limit += 6;
    const posts = await this.fetchPosts(curSelection);

    posts.forEach(post => {
      const jobDetails = new Post(post);
      const jobEl = jobDetails.render();
      this.appContainer.appendChild(jobEl);
    });
  }

  async renderPosts() {}

  async fetchJobIds() {
    try {
      const response = await fetch(this.url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log({ error });
    }
  }

  async fetchPosts(ids) {
    try {
      const jobs = await Promise.all(
        ids.map(async curId => {
          const url = `https://hacker-news.firebaseio.com/v0/item/${curId}.json`;
          const response = await fetch(url);
          const data = await response.json();
          return data;
        })
      );
      return jobs;
    } catch (error) {
      console.log(new Error(error));
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('dom is loaded!');
  const myApp = new App();
  myApp.initialize();
});
