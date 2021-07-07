import { TodosService } from './../shared/todos.service';
import { Component, OnInit} from '@angular/core';
 
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  constructor(public todosService: TodosService) { }

  search: string = '';

  ngOnInit(): void { }
  onChange(id: number) {
    this.todosService.onToggle(id)
  }
  removeTodo(id: number) {
    this.todosService.removeTodo(id);
  }
}
