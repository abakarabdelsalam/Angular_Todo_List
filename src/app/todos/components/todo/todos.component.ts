import { Component, OnInit } from '@angular/core';
import { IStateTodo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
