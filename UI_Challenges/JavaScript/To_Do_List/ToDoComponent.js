export class ToDoComponent {
  constructor(data) {
    this.id = data.id;
    this.toDo = data.toDo;
    this.isEditing = data.isEditing;
  }

  render() {
    const $toDoContainer = document.createElement('div');
    const $nonEditingContainer = document.createElement('div');
    const $editingContainer = document.createElement('div');
    const $toDo = document.createElement('span');
    const $inputLabel = document.createElement('label');
    const $inputEl = document.createElement('input');
    const $editButton = document.createElement('button');
    const $deleteButton = document.createElement('button');
    const $cancelButton = document.createElement('button');
    const $saveButton = document.createElement('button');

    $toDoContainer.id = `to-do-${this.id}`;
    $toDo.textContent = this.toDo;
    $inputEl.placeholder = this.toDo;
    $inputEl.id = `to-do-input-${this.id}`;
    $inputLabel.htmlFor = `to-do-${this.id}`;
    $editButton.textContent = 'edit';
    $editButton.id = 'edit-button';
    $deleteButton.textContent = 'delete';
    $deleteButton.id = 'delete-button';
    $cancelButton.textContent = 'cancel';
    $cancelButton.id = 'cancel-button';
    $saveButton.textContent = 'save';
    $saveButton.id = 'save-button';

    $nonEditingContainer.append($toDo, $editButton, $deleteButton);
    $editingContainer.append($inputEl, $cancelButton, $saveButton);
    $nonEditingContainer.style.display = this.isEditing ? 'none' : 'block';
    $editingContainer.style.display = !this.isEditing ? 'none' : 'block';
    $toDoContainer.append($nonEditingContainer, $editingContainer);

    return $toDoContainer;
  }
}
