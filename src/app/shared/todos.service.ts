import { Injectable } from "@angular/core";
import TodosHelper from '../helpers/TodosHelper';

export interface Todo{
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}

@Injectable({providedIn: 'root'})
export class TodosService extends TodosHelper{
  public todos: Todo[] = this.getTodos() || []
  onToggle(id: number) {
    const idx = this.todos.findIndex(t => t.id === id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }
  removeTodo(id: number) {
    document.getElementById('head')?.classList.remove('hide');
    document.getElementById('head')?.classList.add('startAnimationMove');
    setTimeout(() => {
      this.todos = this.todos.filter(t => t.id !== id);
      this.putTodos(this.todos);
      this.playRemoveMusic();
    }, 4000)
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.putTodos(this.todos);
  }
}