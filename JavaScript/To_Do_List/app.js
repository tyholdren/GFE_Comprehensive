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
  }

  initialize() {
    const $addTaskLabel = document.createElement('label');
    const $addTaskInput = document.createElement('input');
    const $addTaskButton = document.createElement('button');

    $addTaskLabel.textContent = 'add a task';
    $addTaskLabel.htmlFor = 'some id';
    $addTaskButton.textContent = 'add task';

    DEFAULT_TO_DOS.forEach(task => {
      // save input value into task taskData
      // also, map through default to dos on initial page load
      const curTask = new ToDoComponent(task).render();
      console.log({ curTask });
      this.tasksContainer.append(curTask);
    });
    $addTaskButton.addEventListener('click', () => {
      // save input value into task taskData
      // also, map through default to dos on initial page load
      const curTask = new ToDoComponent(taskData).render();
      this.tasksContainer.append(curTask);
    });

    this.$addTaskContainer.append($addTaskLabel, $addTaskInput, $addTaskButton);
    this.$appContainer.append(this.$addTaskContainer, this.$tasksContainer);
    return this.$appContainer;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myApp = new App();
  myApp.initialize();
});
