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
      $dataContainer.classList.add('column-data--content');
      const [contentType, contentValue] = this.formattedData;

      switch (contentType) {
        case CONTENT_TYPE.LINK:
          $dataContainer.style.justifyContent = 'flex-end';
          $columnData = document.createElement('a');
          $columnData.textContent = 'Download';
          $columnData.href = contentValue;
          $columnData.target = '_blank';
          $columnData.classList.add('column-data--link');
          break;
        case CONTENT_TYPE.INVOICE:
          this.formattedData = this.formatDate(contentValue);
          break;
        case CONTENT_TYPE.AMOUNT:
          this.formattedData = this.formatAmount(contentValue);
          break;
        case CONTENT_TYPE.PLAN_TYPE:
          this.formattedData = `${this.formatUpperCase(contentValue)} plan`;
          break;
        case CONTENT_TYPE.STATUS:
          this.formattedData = this.formatUpperCase(contentValue);

          switch (this.formattedData) {
            case STATUS_TYPE.PENDING:
              $columnData.classList.add('column-data--pending');
              break;
            case STATUS_TYPE.PAID:
              $columnData.classList.add('column-data--paid');
              break;
            default:
              console.log('error');
          }

          break;
        default:
          this.formattedData = this.formatUpperCase(contentValue);
          break;
      }
    } else {
      $dataContainer.classList.add('column-data--meta-data');
    }

    if ($columnData.textContent === '') {
      $columnData.textContent = this.formattedData;
    }

    $columnData.classList.add('column-data', this.columnType);
    $dataContainer.classList.add('row__data-container');
    $dataContainer.append($columnData);
    return $dataContainer;
  }
}
