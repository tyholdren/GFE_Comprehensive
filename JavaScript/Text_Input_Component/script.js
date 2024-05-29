import { InputComponent } from './InputComponent.js';

export class Form {
  constructor() {
    this.inputContainer = document.getElementById('text-input-container');
  }

  initialize() {
    const form = document.createElement('form');
    DATA.forEach((el, index) => {
      const input = new InputComponent(el, index);
      const inputEl = input.initialize();
      form.appendChild(inputEl);
    });

    this.inputContainer.appendChild(form);
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
  placeholder: 'name @ email.com',
  errorMessage: 'This is an error message',
  hintText: 'This is a hint text',
  trailingIcon: true,
};

const DATA = [
  {
    ...BASE_DATA,
    leadingIcon: null,
    state: 'normal',
  },
  {
    ...BASE_DATA,
    leadingIcon: null,
    state: 'filled',
  },
  {
    ...BASE_DATA,
    leadingIcon: null,
    state: 'focused',
  },
  {
    ...BASE_DATA,
    leadingIcon: null,
    state: 'disabled',
  },
  {
    ...BASE_DATA,
    leadingIcon: null,
    state: 'error',
  },
];
