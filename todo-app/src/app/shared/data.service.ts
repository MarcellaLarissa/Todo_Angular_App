import { Injectable } from '@angular/core';

import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    //new Todo('This is a test!', true),
    //new Todo('This is a longer test. AL is a cute gray kitty who likes chips, snuggles, and going on long walks on a leash')
  ]

  constructor() { }

  getAllTodos(){
    return this.todos
  }

  addTodo(todo: Todo){
    this.todos.push(todo)
  }

  updateTodo(index: number, updatedTodo: Todo){
    this.todos[index] = updatedTodo
  }

  deleteTodo(index: number){
    this.todos.splice(index, 1)
  }
}
