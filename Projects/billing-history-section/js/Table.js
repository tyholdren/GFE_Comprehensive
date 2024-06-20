import { TableRow } from './TableRow.js';
import { ROW_TYPE } from './utils.js';

export class Table {
  constructor(data) {
    this.data = data;
  }

  render() {
    const $tableContainer = document.createElement('div');
    const $tableContentContainer = document.createElement('div');
    const $tableHeader = new TableRow(undefined, ROW_TYPE.HEADER).render();
    $tableHeader.classList.add('table__row');

    const tableContent = this.data.map(el => {
      const $tableRow = new TableRow(el, ROW_TYPE.CONTENT).render();
      $tableRow.classList.add('table__row');
      return $tableRow;
    });

    $tableContainer.className = 'table';
    $tableContentContainer.append(...tableContent);
    $tableContainer.append($tableHeader, $tableContentContainer);
    return $tableContainer;
  }
}
