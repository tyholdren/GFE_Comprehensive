export class ToDoComponent {
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
    $inputLabel.htmlFor = `to-do-${id}`;
    $editButton.textContent = 'edit';
    $deleteButton.textContent = 'delete';
    $cancelButton.textContent = 'cancel';
    $saveButton.textContent = 'save';

    $editButton.addEventListener('click', () => {
      this.isEditing = !this.isEditing;
      this.render();
    });
    $nonEditingContainer.append($toDo, $editButton, $deleteButton);
    $editingContainer.append($inputEl, $cancelButton, $saveButton);
    $nonEditingContainer.style.display = this.isEditing ? 'none' : 'block';
    $editingContainer.style.display = !this.isEditing ? 'none' : 'block';
    $toDoContainer.append($nonEditingContainer, $editingContainer);
    console.log('non editing:', $nonEditingContainer);
    return $toDoContainer;
  }

  toggleIsEditing() {
    // go find task on the DOM and update isEditing flag then re-render
    // don't just update the state of the display here, that won't reflect
    // in the UI as expected
  }
}
