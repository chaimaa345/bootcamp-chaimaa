// todo.js
export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(description) {
    const task = {
      id: this.tasks.length + 1,
      description,
      completed: false,
    };
    this.tasks.push(task);
  }

  markComplete(taskId) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = true;
    } else {
      console.log(`Task with ID ${taskId} not found.`);
    }
  }

  listTasks() {
    console.log("Your Todo List:");
    this.tasks.forEach(task => {
      const status = task.completed ? '✅' : '❌';
      console.log(`${task.id}. ${task.description} ${status}`);
    });
  }
}
