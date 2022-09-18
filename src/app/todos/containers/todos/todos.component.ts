import { Component, OnInit } from '@angular/core';
import { IStateTodo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  private todoState: IStateTodo[]= []
  constructor() { }

  // todo not completed
  getTodosNotCompleted(): IStateTodo[] {
    return this.todoState.filter(todo => !todo.isCompleted);
  }

  // todo completed
  getTodosCompleted(): IStateTodo[] {
    return this.todoState.filter(todo => todo.isCompleted);
  }

  // todo not count
  countTodosNotCompleted(): number {
    return this.getTodosNotCompleted.length
  }

  // todo count
  countTodosCompleted(): number {
    return this.getTodosCompleted.length
  }

   // check is hidden todo
  isHidden(): boolean {
    return this.countTodosCompleted() === 0;
  }
  ngOnInit(): void {
  }

}
