export class TableColumn {
  constructor(data, columnType) {
    this.data = data;
    this.columnType = columnType;
  }

  render() {
    const $column = document.createElement('div');
    $column.classList.add('table-column', this.columnType);
    $column.textContent = this.data;
    return $column;
  }
}

// $tableRowContainer.append($date, $status, $amount, $planType);

// $downloadLink = document.createElement('a');

// $date.textContent = this.data.created_at;
// $status.textContent = this.data.status;
// $amount.textContent = this.data.amount;
// $planType.textContent = this.data.plan;
// $downloadLink.textContent = 'Download';
// $downloadLink.href = this.data.invoice_url;
// $downloadLink.target = '_blank';

// if ($downloadLink !== null) {
//   $tableRowContainer.append($downloadLink);
// }

// $date.textContent = HEADERS.INVOICE;
// $status.textContent = HEADERS.STATUS;
// $amount.textContent = HEADERS.AMOUNT;
// $planType.textContent = HEADERS.PLAN_TYPE;
// }

// $tableRowContainer.append($date, $status, $amount, $planType);

// $date.textContent = HEADERS.INVOICE;
// $status.textContent = HEADERS.STATUS;
// $amount.textContent = HEADERS.AMOUNT;
// $planType.textContent = HEADERS.PLAN_TYPE;

// $tableRowContainer.append($date, $status, $amount, $planType);
