import { Component, Input } from '@angular/core';
import { ITodo } from 'src/app/interfaces';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  @Input() todo!: ITodo;
  @Input() idx!: number;
  @Input() todoArray!: ITodo[];
  todoService;
  //
  // should be cherry-picked
  // *troublesome change
  // this too should be cherry-picked
  // more cherries
  // changes, a lot
  // *troublesome change
  // *troublesome change
  // jejenjds
  // more change
  //

  markAsDone(idx: number) {
    const todo = this.todoArray[idx];
    todo.done = !this.todoArray[idx].done;
    this.todoService
      .markAsDone(todo)
      .subscribe(() => console.log('Marked as done'));
  }

  markForDeletion(idx: number) {
    this.todoArray[idx].forDeletion = true;
    document.getElementById('delete-confirm')!.style.display = 'block';
  }

  toggleEditDisplay(editContainer: HTMLDivElement) {
    if (editContainer.style.display === 'none')
      editContainer.style.display = 'block';
    else {
      editContainer.style.display = 'none';
    }
  }

  editTodo(inputEdit: HTMLInputElement, idx: number) {
    this.todoArray.splice(idx, 1, {
      ...this.todoArray[idx],
      title: inputEdit.value,
    });

    this.todoService
      .editTodo(this.todoArray[idx])
      .subscribe((todo) => console.log('Edited todo'));
  }
}
