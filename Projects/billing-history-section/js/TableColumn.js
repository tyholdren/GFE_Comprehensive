import { MONTH_NAMES, ROW_TYPE, CONTENT_TYPE, COLUMN_TYPE } from './utils.js';

export class TableColumn {
  constructor(data, rowType, columnType) {
    this.data = data;
    this.dataValue = this.data;
    this.rowType = rowType;
    this.columnType = columnType;
    this.contentType = null;
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

  getContentType() {
    if (this.rowType === ROW_TYPE.CONTENT) {
      const fieldType = this.data[0];
      switch (fieldType) {
        case CONTENT_TYPE.INVOICE:
          this.contentType = CONTENT_TYPE.INVOICE;
          break;
        case CONTENT_TYPE.STATUS:
          this.contentType = CONTENT_TYPE.STATUS;
          break;
        case CONTENT_TYPE.AMOUNT:
          this.contentType = CONTENT_TYPE.AMOUNT;
          break;
        case CONTENT_TYPE.PLAN_TYPE:
          this.contentType = CONTENT_TYPE.PLAN_TYPE;
          break;
        case CONTENT_TYPE.LINK:
          this.contentType = CONTENT_TYPE.LINK;
          break;
        default:
          console.log('not invoice type field');
      }
    }
  }

  render() {
    const $dataContainer = document.createElement('div');
    let $columnData = document.createElement('div');

    if (this.rowType === ROW_TYPE.CONTENT) {
      this.getContentType();
      if (this.contentType === CONTENT_TYPE.LINK) {
        $columnData = document.createElement('a');
        $columnData.textContent = 'Download';
        $columnData.href = this.data[1];
        $columnData.target = '_blank';
        $columnData.classList.add('table__column--last-cell');
      } else if (this.contentType === CONTENT_TYPE.INVOICE) {
        this.dataValue = this.formatDate(this.data[1]);
        $columnData.textContent = this.dataValue;
      } else if (this.contentType === CONTENT_TYPE.AMOUNT) {
        this.dataValue = this.formatAmount(this.data[1]);
        $columnData.textContent = this.dataValue;
      } else if (this.contentType === CONTENT_TYPE.STATUS) {
        this.dataValue = this.data[1];
      }
    }

    $columnData.textContent = this.dataValue;
    $columnData.classList.add('table__column--data', this.columnType);
    $dataContainer.className = 'table__row--data-container';
    $dataContainer.append($columnData);
    return $dataContainer;
  }
}
