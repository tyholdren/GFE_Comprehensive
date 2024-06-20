import { MONTH_NAMES, ROW_TYPE, CONTENT_TYPE } from './utils.js';

export class TableColumn {
  constructor(data, rowType, columnType) {
    this.data = data;
    this.dataValue = this.data;
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
      const contentType = this.data[0];

      if (contentType === CONTENT_TYPE.LINK) {
        $columnData = document.createElement('a');
        $columnData.textContent = 'Download';
        $columnData.href = this.dataValue;
        $columnData.target = '_blank';
        $columnData.classList.add('table__column--last-cell');
      } else if (contentType === CONTENT_TYPE.INVOICE) {
        this.dataValue = this.formatDate(this.dataValue);
        $columnData.textContent = this.dataValue;
      } else if (contentType === CONTENT_TYPE.AMOUNT) {
        this.dataValue = this.formatAmount(this.dataValue);
        $columnData.textContent = this.dataValue;
      }
    }

    $columnData.textContent = this.dataValue;
    $columnData.classList.add('table__column--data', this.columnType);
    $dataContainer.className = 'table__row--data-container';
    $dataContainer.append($columnData);
    return $dataContainer;
  }
}
