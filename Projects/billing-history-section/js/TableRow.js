import { HEADERS, ROW_TYPE } from './utils.js';

export class TableRow {
  constructor(data, rowType) {
    this.data = data;
    this.rowType = rowType;
  }

  render() {
    const $tableRowContainer = document.createElement('div');
    const $date = document.createElement('span');
    const $status = document.createElement('span');
    const $amount = document.createElement('span');
    const $planType = document.createElement('span');
    let $downloadLink = null;

    if (this.rowType === ROW_TYPE.CONTENT) {
      $downloadLink = document.createElement('a');

      $date.textContent = this.data.created_at;
      $status.textContent = this.data.status;
      $amount.textContent = this.data.amount;
      $planType.textContent = this.data.plan;
      $downloadLink.textContent = this.data.invoice_url;
    } else {
      $date.textContent = HEADERS.INVOICE;
      $status.textContent = HEADERS.STATUS;
      $amount.textContent = HEADERS.AMOUNT;
      $planType.textContent = HEADERS.PLAN_TYPE;
    }

    $tableRowContainer.append($date, $status, $amount, $planType);

    if ($downloadLink !== null) {
      $tableRowContainer.append($downloadLink);
    }

    return $tableRowContainer;
  }
}
