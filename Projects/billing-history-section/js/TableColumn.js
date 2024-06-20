import { MONTH_NAMES, ROW_TYPE, CONTENT_TYPE, STATUS_TYPE } from './utils.js';

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

    return `${day} ${month}, ${year}`;
  }

  formatAmount(data) {
    return `$${data}.00`;
  }

  formatUpperCase(data) {
    return data[0].toUpperCase() + data.slice(1);
  }

  render() {
    const $dataContainer = document.createElement('div');
    let $columnData = document.createElement('div');

    if (this.rowType === ROW_TYPE.CONTENT) {
      $dataContainer.classList.add('table__column--data-container--content');
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
      } else if (contentType === CONTENT_TYPE.PLAN_TYPE) {
        this.formattedData = `${this.formatUpperCase(contentValue)} plan`;
      } else {
        this.formattedData = this.formatUpperCase(contentValue);
      }
    }

    if ($columnData.textContent === '') {
      $columnData.textContent = this.formattedData;
    }

    $columnData.classList.add('table__column--data', this.columnType);

    if (this.formattedData === STATUS_TYPE.PENDING) {
      $columnData.classList.add('table__column--data--pending');
    } else if (this.formattedData === STATUS_TYPE.PAID) {
      $columnData.classList.add('table__column--data--paid');
    }

    $dataContainer.classList.add('table__row--data-container');
    $dataContainer.append($columnData);
    return $dataContainer;
  }
}
