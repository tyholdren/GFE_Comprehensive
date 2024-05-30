import { Post } from './Post.js';

export class App {
  constructor() {
    this.$appContainer = document.getElementById('app-container');
    this.$jobPostingsContainer = document.getElementById(
      'job-postings-container'
    );
    this.$loadJobsButton = document.createElement('button');
    this.jobIds = [];
    this.page = 0;
    this.PAGE_SIZE = 6;
    this.start = this.page * this.PAGE_SIZE;
    this.end = this.start + this.PAGE_SIZE;

    this.URL = 'https://hacker-news.firebaseio.com/v0/jobstories.json';
  }

  async initialize() {
    const $headerEl = document.createElement('h1');
    const $loadingEl = document.createElement('div');
    const footerContainer = document.createElement('div');

    let loadingIndicator = null;
    $loadingEl.textContent = 'Loading jobs...';
    $loadingEl.hidden = false;
    loadingIndicator = $loadingEl;

    this.$appContainer.appendChild(this.$jobPostingsContainer);
    footerContainer.appendChild(loadingIndicator);
    this.$appContainer.appendChild(footerContainer);

    $headerEl.textContent = 'Hacker News Jobs Board';
    this.$loadJobsButton.textContent = 'Load More Jobs';

    this.$loadJobsButton.addEventListener('click', async () => {
      this.setIsFetchingJobs(true);

      const postIds = this.jobIds.slice(this.start, this.end);
      this.page += 1;
      const posts = await this.fetchPosts(postIds);
      this.renderPosts(posts);
      this.setIsFetchingJobs(false);
    });

    this.$jobPostingsContainer.appendChild($headerEl);

    this.jobIds = await this.fetchJobIds();
    const curSelection = this.jobIds.slice(this.start, this.end);
    this.page += 1;
    const posts = await this.fetchPosts(curSelection);
    this.renderPosts(posts);
    $loadingEl.hidden = true;

    footerContainer.appendChild(this.$loadJobsButton);
  }

  setIsFetchingJobs(shouldDisplay) {
    this.$loadJobsButton.disabled = shouldDisplay;
    this.$loadJobsButton.textContent = shouldDisplay
      ? 'Loading Jobs...'
      : 'Load More Jobs';
  }

  async renderPosts(posts) {
    const $fragmentEl = document.createDocumentFragment();
    $fragmentEl.append(...posts.map(post => new Post(post).render()));
    this.$jobPostingsContainer.appendChild($fragmentEl);
  }

  async fetchJobIds() {
    try {
      const response = await fetch(this.URL);
      return await response.json();
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
          return await response.json();
        })
      );
      return jobs;
    } catch (error) {
      console.log(new Error(error));
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myApp = new App();
  myApp.initialize();
});
