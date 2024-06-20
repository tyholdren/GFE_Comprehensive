import { MONTH_NAMES } from './utils.js';

export class TableColumn {
  constructor(data, columnType) {
    this.data = data;
    this.columnType = columnType;
  }

  isLink(data) {
    return typeof data === 'string' && data.startsWith('https://');
  }

  isDate(data) {
    return typeof data === 'string' && data.includes('-');
  }

  formatDate(data) {
    const day = data.slice(8);
    const month = MONTH_NAMES[parseInt(data.slice(5, 7)) - 1];
    const year = data.slice(0, 4);

    return `${day} ${month} ${year}`;
  }

  render() {
    const $dataContainer = document.createElement('div');
    let $columnData = null;

    if (this.isLink(this.data)) {
      $columnData = document.createElement('a');
      $columnData.textContent = 'Download';
      $columnData.href = this.data;
      $columnData.target = '_blank';
      $columnData.classList.add('table__column--last-cell');
    } else {
      $columnData = document.createElement('div');
      let dataValue = this.data;
      if (this.isDate(this.data)) {
        dataValue = this.formatDate(this.data);
      }
      $columnData.textContent = dataValue;
    }

    $columnData.classList.add('table__column--data', this.columnType);
    $dataContainer.className = 'table__row--data-container';
    $dataContainer.append($columnData);
    return $dataContainer;
  }
}
