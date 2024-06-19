import { TableRow } from './TableRow.js';
import { HEADERS, ROW_TYPE } from './utils.js';

export class Table {
  constructor(data) {
    this.data = data;
  }

  render() {
    const $tableContainer = document.createElement('div');
    // const $tableHeader = document.createElement('div');
    const $tableContentContainer = document.createElement('div');

    const $tableHeader = new TableRow(HEADERS, ROW_TYPE.HEADER).render();

    const $fragment = document.createDocumentFragment();

    this.data.forEach(el => {
      const $tableRow = new TableRow(el, ROW_TYPE.CONTENT).render();
      $fragment.append($tableRow);
    });

    $tableContentContainer.append($fragment);
    $tableContainer.append($tableHeader, $tableContentContainer);
    return $tableContainer;
  }
}
