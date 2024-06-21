import { HEADERS, ROW_TYPE, COLUMN_TYPE } from './utils.js';
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
      tableColumns = Object.entries(this.data).map(entry => {
        return new TableColumn(
          entry,
          ROW_TYPE.CONTENT,
          COLUMN_TYPE.SMALL
        ).render();
      });
    } else {
      tableColumns = Object.values(HEADERS).map(value => {
        return new TableColumn(
          value,
          ROW_TYPE.HEADER,
          COLUMN_TYPE.MEDIUM
        ).render();
      });
    }

    $fragment.append(...tableColumns);
    $tableRowContainer.append($fragment);
    return $tableRowContainer;
  }
}
