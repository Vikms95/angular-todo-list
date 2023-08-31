import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';
import { ITodo } from './interfaces';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private todoService: TodoService) {
    todoService.getTodos().subscribe((data) => {
      this.todoArray = data;
    });
  }

  todoId = Math.random() * 0.5;
  todoArray: ITodo[] = [];

  addTodo(value: string, taskInput: HTMLInputElement) {
    const todo = {
      id: this.todoId,
      title: value,
      done: false,
      forDeletion: false,
    };

    this.todoService.addTodo(todo).subscribe((todo) => {
      if (!todo) return;

      this.todoId++;
      taskInput.value = '';
      this.todoArray.push(todo);
    });
  }

  restoreForDeletion() {
    document.getElementById('delete-confirm')!.style.display = 'none';

    this.todoArray.forEach((todo) => (todo.forDeletion = false));
  }

  deleteTodo() {
    document.getElementById('delete-confirm')!.style.display = 'none';

    const todo = this.todoArray.find((todo) => {
      return todo.forDeletion === true ? todo : null;
    });

    if (todo)
      this.todoService
        .deleteTodo(todo)
        .subscribe(
          () =>
            (this.todoArray = this.todoArray.filter((t) => t.id !== todo.id))
        );
  }

  clearTodos() {
    this.todoService.clearTodos().subscribe(() => this.todoArray.splice(0));
  }
}
