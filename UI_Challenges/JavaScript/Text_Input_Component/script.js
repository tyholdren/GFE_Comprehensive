import { InputComponent } from './InputComponent.js';

export class Form {
  constructor() {
    this.appContainer = document.getElementById('app-container');
  }

  initialize() {
    const form = document.createElement('form');
    form.classList.add('form-container');
    DATA.forEach((el, index) => {
      const input = new InputComponent(el, index);
      const inputEl = input.initialize();
      form.appendChild(inputEl);
    });

    this.appContainer.appendChild(form);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is loaded!');
  const myForm = new Form();
  myForm.initialize();
});

const BASE_DATA = {
  label: 'Email',
  inputType: 'email',
  placeholder: 'name@email.com',
  errorMessage: null,
  hintText: 'This is a hint text',
  trailingIcon: true,
  leadingIcon: null,
  isDisabled: false,
};

const DATA = [
  { ...BASE_DATA },
  {
    ...BASE_DATA,
    leadingIcon: true,
  },
  { ...BASE_DATA, isDisabled: true },
  {
    ...BASE_DATA,
    hintText: null,
    errorMessage: 'This is an error message',
  },
];
