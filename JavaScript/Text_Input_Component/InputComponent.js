export class InputComponent {
  constructor(data, index) {
    this.data = data;
    this.id = index;
  }

  initialize() {
    const {
      label,
      inputType,
      placeholder,
      errorMessage,
      hintText,
      trailingIcon,
      leadingIcon,
      state,
    } = this.data;

    const inputContainer = document.createElement('div');
    const inputEl = document.createElement('input');
    const labelEl = document.createElement('label');
    const errorEl = document.createElement('span');
    const hintTextEl = document.createElement('span');

    inputEl.id = `${inputType}-${this.id}`;
    inputEl.classList.add('input');
    inputEl.type = inputType;
    inputEl.placeholder = placeholder;

    labelEl.textContent = label;
    labelEl.htmlFor = `${inputType}-${this.id}`;

    errorEl.textContent = errorMessage;
    errorEl.classList.add('error-message');

    hintTextEl.textContent = hintText;
    hintTextEl.classList.add('hint-text');

    inputContainer.appendChild(labelEl);
    inputContainer.appendChild(inputEl);
    inputContainer.appendChild(errorEl);
    inputContainer.appendChild(hintTextEl);

    return inputContainer;
  }
}
