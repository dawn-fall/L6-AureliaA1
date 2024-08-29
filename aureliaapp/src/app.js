//base do to app code from
//https://aurelia.io/docs/tutorials/creating-a-todo-app#setup 

//help with bootstrap in aurelia from
//https://discourse.aurelia.io/t/adding-bootstrap/1205/7
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/bootstrap.bundle');
import { hi } from './hello';

export class App {
  constructor() {
    this.heading = 'Aurelia To Do App';
    this.todos = [];
    this.todoDescription = '';
    this.desc = 'This is a simple To-Do app. Add whatever you want, strikethrough, remove...'
  }

  addTodo() {
    if (this.todoDescription) {
      this.todos.push({
        description: this.todoDescription,
        done: false
      });
      this.todoDescription = '';
    }
  }

  removeTodo(todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  showhi() {
    const userName = prompt("Please enter your name:", "User");
    if (userName) {
      const message = hi(userName);
      alert(message);
    } 
    else {
      alert("No name entered! Welcome to Aurelia anyway.");
    }
  }
}
