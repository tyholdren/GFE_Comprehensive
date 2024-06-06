export class Section {
  constructor(data) {
    this.data = data;
  }

  render() {
    const $sectionContainer = document.createElement('div');

    const $inputContainer = document.createElement('div');
    const $inputLabel = document.createElement('label');
    const $inputEl = document.createElement('input');

    const $containerStateWrapper = document.createElement('div');
    const $containerStateLabel = document.createElement('label');
    const $containerState = document.createElement('input');
    const $dataContainer = document.createElement('div');

    $inputLabel.htmlFor = 'left-input';
    $inputLabel.textContent = '0/4 selected"';

    $inputEl.id = 'left-input';
    $inputEl.type = 'text';

    $containerStateLabel.htmlFor = 'container-state';
    $containerStateLabel.textContent = '0/4 Selected';
    $containerState.type = 'checkbox';
    $containerState.checked = false;
    $containerState.name = '0/4 selected';
    $containerStateWrapper.append($containerState, $containerStateLabel);

    this.data.forEach(el => {
      const $dataWrapper = document.createElement('div');
      const $input = document.createElement('input');
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

    $inputContainer.append($inputLabel, $inputEl);
    $sectionContainer.append($inputEl, $containerStateWrapper, $dataContainer);
    return $sectionContainer;
  }
}
