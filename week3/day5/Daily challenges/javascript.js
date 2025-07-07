let tasks = [];
let taskId = 0;

const form = document.getElementById('taskForm');
const input = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const clearAll = document.getElementById('clearAll');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  addTask();
});

clearAll.addEventListener('click', () => {
  tasks = [];
  taskList.innerHTML = '';
});

function addTask() {
  const text = input.value.trim();
  if (text === '') return;

  const task = {
    task_id: taskId++,
    text,
    done: false
  };

  tasks.push(task);
  renderTask(task);
  input.value = '';
}

function renderTask(task) {
  const div = document.createElement('div');
  div.className = 'task-item';
  div.setAttribute('data-task-id', task.task_id);

  const xIcon = document.createElement('i');
  xIcon.className = 'fas fa-times';
  xIcon.addEventListener('click', () => deleteTask(task.task_id));

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => doneTask(task.task_id, checkbox.checked));

  const label = document.createElement('label');
  label.textContent = task.text;

  div.appendChild(xIcon);
  div.appendChild(checkbox);
  div.appendChild(label);

  taskList.appendChild(div);
}

function doneTask(id, checked) {
  const task = tasks.find(t => t.task_id === id);
  if (!task) return;

  task.done = checked;

  const taskDiv = document.querySelector(`[data-task-id="${id}"]`);
  const label = taskDiv.querySelector('label');
  label.className = checked ? 'completed' : '';
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.task_id !== id);
  const taskDiv = document.querySelector(`[data-task-id="${id}"]`);
  if (taskDiv) taskDiv.remove();
}


