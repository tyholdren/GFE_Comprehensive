import { MONTH_NAMES, ROW_TYPE, CONTENT_TYPE } from './utils.js';

export class TableColumn {
  constructor(data, rowType, columnType) {
    this.formattedData = data;
    this.rowType = rowType;
    this.columnType = columnType;
  }

  formatDate(data) {
    const day = data.slice(8);
    const month = MONTH_NAMES[parseInt(data.slice(5, 7)) - 1];
    const year = data.slice(0, 4);

    return `${day} ${month} ${year}`;
  }

  formatAmount(data) {
    return `$${data}.00`;
  }

  render() {
    const $dataContainer = document.createElement('div');
    let $columnData = document.createElement('div');

    if (this.rowType === ROW_TYPE.CONTENT) {
      const [contentType, contentValue] = this.formattedData;

      if (contentType === CONTENT_TYPE.LINK) {
        $columnData = document.createElement('a');
        $columnData.textContent = 'Download';
        $columnData.href = contentValue;
        $columnData.target = '_blank';
        $columnData.classList.add('table__column--last-cell');
      } else if (contentType === CONTENT_TYPE.INVOICE) {
        this.formattedData = this.formatDate(contentValue);
      } else if (contentType === CONTENT_TYPE.AMOUNT) {
        this.formattedData = this.formatAmount(contentValue);
      } else {
        this.formattedData = contentValue;
      }
    }

    $columnData.textContent = this.formattedData;
    $columnData.classList.add('table__column--data', this.columnType);
    $dataContainer.className = 'table__row--data-container';
    $dataContainer.append($columnData);
    return $dataContainer;
  }
}
