import { TableRow } from './TableRow.js';

export class Table {
  constructor(data) {
    this.data = data;
  }

  render() {
    const $tableContainer = document.createElement('div');
    const $tableHeader = document.createElement('div');
    const $tableContentContainer = document.createElement('div');

    const $fragment = document.createDocumentFragment();
    console.log(this.data);
    this.data.forEach(el => {
      const $tableRow = new TableRow(el).render();
      $fragment.append($tableRow);
    });

    $tableContentContainer.append($fragment);
    $tableContainer.append($tableHeader, $tableContentContainer);
    return $tableContainer;
  }
}
