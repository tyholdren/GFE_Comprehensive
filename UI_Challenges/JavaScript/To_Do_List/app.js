import { ToDoComponent } from './ToDoComponent.js';

const DEFAULT_TO_DOS = [
  { id: 0, toDo: 'walk dog', isEditing: false },
  { id: 1, toDo: 'get groceries', isEditing: false },
  { id: 2, toDo: 'clean room', isEditing: false },
];

export default class App {
  constructor() {
    this.$appContainer = document.getElementById('app-container');
    this.$addTaskContainer = document.createElement('div');
    this.$tasksContainer = document.createElement('div');
    this.toDos = [];
    this.index = DEFAULT_TO_DOS.length;
  }

  initialize() {
    const $addTaskLabel = document.createElement('label');
    const $addTaskInput = document.createElement('input');
    const $addTaskButton = document.createElement('button');

    $addTaskInput.id = 'add-task-input';
    $addTaskInput.textContent = '';
    $addTaskInput.placeholder = 'add a task';
    $addTaskLabel.htmlFor = 'add-task-input';
    $addTaskButton.textContent = 'add task';

    DEFAULT_TO_DOS.forEach(task => {
      const newTask = new ToDoComponent(task, this.updateExistingTask);
      this.toDos.push(newTask);
    });
    this.renderToDos();

    $addTaskButton.addEventListener('click', () => {
      if ($addTaskInput.value) {
        const newTask = {
          id: this.index,
          toDo: $addTaskInput.value,
          isEditing: false,
        };
        this.index += 1;
        $addTaskInput.value = '';
        this.addTask(newTask);
      }
    });

    this.$tasksContainer.addEventListener('click', event => {
      event.preventDefault();
      const buttonId = event.target.id;
      const parentNodeId = event.target.parentNode.parentNode.id;
      const taskToDelete = event.target.parentNode;
      this.handleTasksContainerClick(buttonId, parentNodeId, taskToDelete);
    });

    this.$addTaskContainer.append($addTaskLabel, $addTaskInput, $addTaskButton);
    this.$appContainer.append(this.$addTaskContainer, this.$tasksContainer);
    return this.$appContainer;
  }

  handleTasksContainerClick(buttonId, parentNodeId, taskToDelete) {
    const taskId = parseInt(parentNodeId[parentNodeId.length - 1]);

    switch (buttonId) {
      case buttonId === 'delete-button':
        if (taskToDelete.parentNode) {
          taskToDelete.parentNode.removeChild(taskToDelete);
        }
        break;
      case 'save-button':
        const inputValue = document.getElementById(
          `to-do-input-${taskId}`
        ).value;
        this.updateExistingTask(taskId, inputValue);
        break;
      case 'edit-button':
      case 'cancel-button':
        this.toggleIsEditing(taskId);
        break;
      default:
        return;
    }
  }

  addTask(task) {
    const newTask = new ToDoComponent(task);
    this.toDos.push(newTask);
    this.$tasksContainer.append(newTask.render());
  }

  toggleIsEditing = taskId => {
    const taskIndex = this.toDos.findIndex(task => task.id === taskId);
    const taskToUpdate = this.toDos[taskIndex];
    taskToUpdate.isEditing = !taskToUpdate.isEditing;
    const $existingTask = document.getElementById(`to-do-${taskToUpdate.id}`);

    $existingTask.replaceWith(taskToUpdate.render());
  };

  updateExistingTask = (taskId, inputValue) => {
    const index = this.toDos.findIndex(task => task.id === taskId);
    const taskToUpdate = this.toDos[index];
    taskToUpdate.toDo = inputValue;
    const $existingTask = document.getElementById(`to-do-${taskId}`);
    $existingTask.replaceWith(taskToUpdate.render());
    this.toggleIsEditing(taskId);
  };

  renderToDos() {
    const fragment = new DocumentFragment();
    this.toDos.forEach(task => {
      fragment.append(task.render());
    });
    this.$tasksContainer.append(fragment);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myApp = new App();
  myApp.initialize();
});
