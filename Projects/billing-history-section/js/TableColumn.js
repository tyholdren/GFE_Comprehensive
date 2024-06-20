export class TableColumn {
  constructor(data, columnType) {
    this.data = data;
    this.columnType = columnType;
  }

  isLink(data) {
    if (typeof data === 'string') {
      return data.startsWith('https://');
    }
    return false;
  }

  render() {
    let $columnData = null;

    if (this.isLink(this.data)) {
      $columnData = document.createElement('a');
      $columnData.textContent = 'Download';
      $columnData.href = this.data;
      $columnData.target = '_blank';
    } else {
      $columnData = document.createElement('div');
      $columnData.textContent = this.data;
    }

    $columnData.classList.add('table-column', this.columnType);
    return $columnData;
  }
}
