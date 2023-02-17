import { Component } from '@angular/core';

interface ITodo {
  done: Boolean;
  title: string;
  forDeletion: Boolean;
}

@Component( {
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
} )
export class AppComponent {
  todoArray: ITodo[] = [
    { done: false, title: 'Go home', forDeletion: false },
    { done: false, title: 'Feed bunny', forDeletion: false },
    { done: false, title: 'Study programming', forDeletion: false },
  ];

  addTodo ( value: string ) {
    this.todoArray.push( { done: false, title: value, forDeletion: false } );
  }

  toggleTodo ( idx: number ) {
    this.todoArray[ idx ].done = !this.todoArray[ idx ].done;
  }

  markForDeletion ( idx: number ) {
    this.todoArray[ idx ].forDeletion = true;
    document.getElementById( 'delete-confirm' )!.style.display = 'block';
  }

  restoreForDeletion () {
    this.todoArray.forEach( todo => todo.forDeletion = false );
    document.getElementById( 'delete-confirm' )!.style.display = 'none';
  }

  deleteTodo () {
    this.todoArray.forEach( ( todo, index ) => {
      if ( todo.forDeletion === true ) this.todoArray.splice( index, 1 );
    } );
    document.getElementById( 'delete-confirm' )!.style.display = 'none';
  }

  toggleEditDisplay ( editContainer: HTMLDivElement ) {
    if ( editContainer.style.display === 'none' )
      editContainer.style.display = 'block';
    else
      editContainer.style.display = 'none';
  }

  editTodo ( inputEdit: HTMLInputElement, idx: number ) {
    this.todoArray.splice( idx, 1,
      { ...this.todoArray[ idx ], title: inputEdit.value }
    );

  }

  clearTodos () {
    this.todoArray.splice( 0 );
  }

}
