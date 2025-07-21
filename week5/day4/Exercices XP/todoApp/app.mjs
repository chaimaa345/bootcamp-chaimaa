// app.mjs
import { TodoList } from './todo.mjs';

const myList = new TodoList();

myList.addTask('Buy groceries');
myList.addTask('Walk the dog');
myList.addTask('Read a book');

myList.markComplete(2);

myList.listTasks();

