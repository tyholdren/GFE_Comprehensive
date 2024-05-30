export class Post {
  constructor(data) {
    this.data = data;
  }

  render() {
    const { by, id, score, time, title, type, url } = this.data;

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
    dateEl.textContent = time;

    postContainerEl.appendChild(titleEl);
    postContainerEl.appendChild(authorEl);
    postContainerEl.appendChild(dateEl);

    return postContainerEl;
  }
}
