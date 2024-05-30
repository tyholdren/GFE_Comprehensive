import { Post } from './Post.js';

export class App {
  constructor() {
    this.appContainer = document.getElementById('app-container');
    this.jobPostingsContainer = document.getElementById(
      'job-postings-container'
    );
    this.jobIds = [];
    this.pageSize = 0;
    this.url = 'https://hacker-news.firebaseio.com/v0/jobstories.json';
    this.loadingIndicator = null;
  }

  async initialize() {
    const headerEl = document.createElement('h1');
    const loadingEl = document.createElement('div');
    const loadJobsButton = document.createElement('button');
    const footerContainer = document.createElement('div');

    loadingEl.textContent = 'Loading jobs...';
    loadingEl.hidden = true;
    this.loadingIndicator = loadingEl;

    this.appContainer.appendChild(this.jobPostingsContainer);
    footerContainer.appendChild(this.loadingIndicator);
    this.appContainer.appendChild(footerContainer);

    this.toggleLoadingIndicator(false);

    headerEl.textContent = 'Hacker News Jobs Board';
    loadJobsButton.textContent = 'Load More Jobs';

    loadJobsButton.addEventListener('click', async () => {
      this.toggleLoadingIndicator(false);
      const postIds = this.jobIds.slice(this.pageSize, this.pageSize + 6);
      this.pageSize += 6;
      const posts = await this.fetchPosts(postIds);
      this.renderPosts(posts);
      this.toggleLoadingIndicator(true);
    });

    this.jobPostingsContainer.appendChild(headerEl);

    this.jobIds = await this.fetchJobIds();
    const curSelection = this.jobIds.slice(this.pageSize, this.pageSize + 6);
    this.pageSize += 6;
    const posts = await this.fetchPosts(curSelection);
    this.renderPosts(posts);

    this.toggleLoadingIndicator(true);

    footerContainer.appendChild(loadJobsButton);
  }

  toggleLoadingIndicator(shouldDisplay) {
    this.loadingIndicator.hidden = shouldDisplay;
  }

  async renderPosts(posts) {
    const fragment = document.createDocumentFragment();
    posts.forEach(post => {
      const jobDetails = new Post(post);
      const jobEl = jobDetails.render();
      fragment.append(jobEl);
    });
    this.jobPostingsContainer.appendChild(fragment);
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
