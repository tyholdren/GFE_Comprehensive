export class TableRow {
  constructor(data) {
    this.data = data;
  }

  render() {
    const $tableRowContainer = document.createElement('div');
    const $date = document.createElement('span');
    const $status = document.createElement('span');
    const $amount = document.createElement('span');
    const $planType = document.createElement('span');
    const $downloadLink = document.createElement('a');

    $date.textContent = this.data.created_at;
    $status.textContent = this.data.status;
    $amount.textContent = this.data.amount;
    $planType.textContent = this.data.plan;
    $downloadLink.textContent = this.data.invoice_url;

    $tableRowContainer.append(
      $date,
      $status,
      $amount,
      $planType,
      $downloadLink
    );

    return $tableRowContainer;
  }
}
