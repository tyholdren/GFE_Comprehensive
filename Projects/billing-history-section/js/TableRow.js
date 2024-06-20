import { HEADERS, ROW_TYPE } from './utils.js';
import { TableColumn } from './TableColumn.js';

export class TableRow {
  constructor(data, rowType) {
    this.data = data;
    this.rowType = rowType;
  }

  render() {
    const $tableRowContainer = document.createElement('div');
    const $fragment = document.createDocumentFragment();
    let tableColumns = null;

    if (this.rowType === ROW_TYPE.CONTENT) {
      tableColumns = Object.values(this.data).map(value => {
        return new TableColumn(value, 'small').render();
      });
    } else {
      tableColumns = Object.values(HEADERS).map(value => {
        return new TableColumn(value, 'small').render();
      });
    }

    $fragment.append(...tableColumns);
    $tableRowContainer.append($fragment);
    return $tableRowContainer;
  }
}
