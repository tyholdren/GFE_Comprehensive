export default class ToDoComponent {
  constructor(data) {
    this.data = data;
    this.isEditing = data.isEditing;
  }

  render() {
    const { id, toDo } = this.data;
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

    $toDoContainer.id = `to-do-${id}`;
    $toDo.textContent = toDo;
    $inputEl.placeholder = toDo;
    $inputLabel.htmlFor(`to-do-${id}`);
    $editButton.textContent = 'edit';
    $deleteButton.textContent = 'delete';
    $cancelButton.textContent = 'cancel';
    $saveButton.textContent = 'save';

    $editButton.addEventListener('click', () => {
      this.isEditing = !this.isEditing;
    });

    $nonEditingContainer.append($inputEl, $cancelButton, $saveButton);
    $editingContainer.append($toDo, $editButton, $deleteButton);

    $nonEditingContainer.style.display = this.isEditing ? 'none' : 'block';
    $editingContainer.style.display = !this.isEditing ? 'none' : 'block';

    $toDoContainer.append($nonEditingContainer, $editingContainer);
    return toDoContainer;
  }
}
