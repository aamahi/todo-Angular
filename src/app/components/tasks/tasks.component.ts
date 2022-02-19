import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks:Task[] = [];

  constructor( private TaskService:TaskService ) { }

  ngOnInit(): void {
    this.TaskService.getTask().subscribe((tasks)=>this.tasks=tasks);
  }

}
