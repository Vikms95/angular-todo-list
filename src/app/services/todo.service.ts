import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITodo } from '../interfaces';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:5000';

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.url + '/todo');
  }

  addTodo(todo: ITodo): Observable<ITodo> {
    return this.http.post<ITodo>(this.url + '/todo', todo);
  }

  markAsDone(todo: ITodo): Observable<ITodo> {
    const url = this.url + '/todo/done/' + todo.id;
    const body = todo;

    return this.http.put<ITodo>(url, body);
  }

  editTodo(todo: ITodo): Observable<ITodo> {
    const url = this.url + '/todo/edit/' + todo.id;
    const body = todo;

    return this.http.put<ITodo>(url, body);
  }

  deleteTodo(todo: ITodo): Observable<ITodo> {
    const url = this.url + '/todo/' + todo.id;
    return this.http.delete<ITodo>(url);
  }

  clearTodos(): Observable<ITodo> {
    const url = this.url + '/todo';
    return this.http.delete<ITodo>(url);
  }
}
