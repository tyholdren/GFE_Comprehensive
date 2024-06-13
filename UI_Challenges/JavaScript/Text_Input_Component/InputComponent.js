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
      trailingIcon, // not implemented
      leadingIcon, // not implemented
      isDisabled,
    } = this.data;

    const inputContainer = document.createElement('div');
    const inputEl = document.createElement('input');
    const labelEl = document.createElement('label');
    const hintTextEl = document.createElement('span');

    inputContainer.classList.add('input-container');

    let errorEl = null;
    if (errorMessage) {
      errorEl = document.createElement('span');
      errorEl.classList.add('error-message');
      inputEl.classList.add('input-error');
    }

    inputEl.id = `${inputType}-${this.id}`;
    inputEl.classList.add('input');
    inputEl.type = inputType;
    inputEl.placeholder = placeholder;

    if (isDisabled) {
      inputEl.disabled = true;
      inputEl.classList.add('input-disabled');
    }

    labelEl.textContent = label;
    labelEl.htmlFor = `${inputType}-${this.id}`;
    labelEl.classList.add('label');

    if (errorMessage) {
      errorEl.textContent = errorMessage;
      errorEl.classList.add('error-message');
    }

    if (hintText) {
      hintTextEl.textContent = hintText;
      hintTextEl.classList.add('hint-text');
    }

    inputContainer.appendChild(labelEl);
    inputContainer.appendChild(inputEl);

    if (errorEl) {
      inputContainer.appendChild(errorEl);
    } else {
      inputContainer.appendChild(hintTextEl);
    }

    return inputContainer;
  }
}
