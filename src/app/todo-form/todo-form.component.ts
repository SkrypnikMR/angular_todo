import { Todo, TodosService } from './../shared/todos.service';
import { Component, OnInit } from '@angular/core';
import { ActiveToast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  title: string = '';
  constructor(private todosService: TodosService, private toastr: ToastrService) { }
  ngOnInit(): void {
  }
  addTodo(): void | ActiveToast<any> {
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date()
    }
    if(!this.title) return this.toastr.warning('New todo must not be empty', 'Input error!', );
    this.todosService.addTodo(todo)
    this.title = '';
  }
}
