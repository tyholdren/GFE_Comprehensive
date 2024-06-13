export class Post {
  constructor(data) {
    this.data = data;
  }

  render() {
    const { by, time, title, url } = this.data;

    const postContainerEl = document.createElement('div');
    let titleEl = null;

    if (url) {
      titleEl = document.createElement('a');
      titleEl.href = url;
      titleEl.target = '_blank';
    } else {
      titleEl = document.createElement('h3');
    }

    const authorEl = document.createElement('span');
    const dateEl = document.createElement('span');

    titleEl.textContent = title;
    authorEl.textContent = by;
    dateEl.textContent = this.formatDate(time);

    postContainerEl.append(titleEl, authorEl, dateEl);

    return postContainerEl;
  }

  formatDate(time) {
    return new Date(time * 1000).toLocaleString();
  }
}
