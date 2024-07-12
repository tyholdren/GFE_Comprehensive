export class App {
  constructor() {
    this.$input = document.getElementById('input');
    this.$submitBtn = document.getElementById('submit-btn');
    this.$list = document.getElementById('list');
    this.index = 0;
  }

  initialize() {
    this.$submitBtn.addEventListener('click', () => {
      this.$taskContainer = document.createElement('div');
      this.$newTask = document.createElement('li');
      this.$deleteBtn = document.createElement('button');

      const taskContainerId = `task-container_${this.index}`;
      this.$taskContainer.id = taskContainerId;
      this.$newTask.textContent = this.$input.value;
      this.$deleteBtn.id = `delete-btn_${this.index}`;
      this.$deleteBtn.textContent = 'delete';

      this.$taskContainer.append(this.$newTask, this.$deleteBtn);
      this.$list.append(this.$taskContainer);
      this.$input.value = '';
      this.index += 1;
    });

    this.$list.addEventListener('click', event => {
      if (event.target.textContent === 'delete') {
        const deleteId = event.target.id.split('_')[1];
        this.$taskContainerId = document.getElementById(
          `task-container_${deleteId}`
        );
        this.$list.removeChild(this.$taskContainerId);
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('dom loaded');
  const toDoList = new App();
  toDoList.initialize();
});
