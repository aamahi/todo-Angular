import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { Task } from '../../Task';
import {TASKS} from "../../mock-task";

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

  deleteTask(task: Task){
    this.TaskService
      .deleteTask(task)
      .subscribe(
      () => (this.tasks = this.tasks.filter( (t) => t.id !== task.id))
    );
  }

  toggleRemainder(task: Task){
    task.remainder = !task.remainder;
    this.TaskService.updateToggleRemainder(task).subscribe();
  }

}
