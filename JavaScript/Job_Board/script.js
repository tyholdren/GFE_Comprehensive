import { Post } from './Post.js';

export class App {
  constructor() {
    this.appContainer = document.getElementById('app-container');
    this.jobPostingsContainer = document.getElementById(
      'job-postings-container'
    );
    this.jobIds = [];
    this.limit = 0;
    this.url = 'https://hacker-news.firebaseio.com/v0/jobstories.json';
  }

  async initialize() {
    const header = document.createElement('h1');
    const footer = document.createElement('div');
    const buttonContainer = document.getElementById('button-container');
    const loadJobsButton = document.createElement('button');

    header.textContent = 'Hacker News Jobs Board';
    loadJobsButton.textContent = 'Load More Jobs';

    loadJobsButton.addEventListener('click', async () => {
      const postIds = this.jobIds.slice(this.limit, this.limit + 6);
      this.limit += 6;
      const posts = await this.fetchPosts(postIds);
      this.renderPosts(posts);
    });

    this.jobPostingsContainer.appendChild(header);
    footer.appendChild(loadJobsButton);
    buttonContainer.appendChild(footer);

    this.jobIds = await this.fetchJobIds();
    const curSelection = this.jobIds.slice(this.limit, this.limit + 6);
    this.limit += 6;
    const posts = await this.fetchPosts(curSelection);
    this.renderPosts(posts);

    this.appContainer.appendChild(this.jobPostingsContainer);
  }

  async renderPosts(posts) {
    console.log('rendering posts');
    posts.forEach(post => {
      const jobDetails = new Post(post);
      const jobEl = jobDetails.render();
      this.jobPostingsContainer.appendChild(jobEl);
    });
  }

  async fetchJobIds() {
    try {
      const response = await fetch(this.url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(`Error: ${error}`);
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
