export class Section {
  constructor(data, section) {
    this.data = data;
    this.section = section;
  }

  render() {
    const $sectionContainer = document.createElement('div');
    const $dataContainer = document.createElement('div');

    $sectionContainer.id = this.section;
    $dataContainer.id = `${this.section}-data-container`;

    this.data.forEach(el => {
      const $dataWrapper = document.createElement('div');
      const $input = document.createElement('input');

      $dataWrapper.id = `${el}-checkbox`;

      $input.type = 'checkbox';
      $input.checked = false;
      $input.name = el;
      $input.id = el;

      const $inputLabel = document.createElement('label');
      $inputLabel.textContent = el;
      $inputLabel.htmlFor = el;
      $dataWrapper.append($input, $inputLabel);
      $dataContainer.append($dataWrapper);
    });

    return $dataContainer;
  }
}
