import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from "../../Task";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text!: string;
  day!: string;
  remainder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (!this.text){
      alert('please add a task!');
      return;
    }

    // const newTask = {
    //   text: this.text,
    //   day: this.day,
    //   remainder: this.remainder,
    // };
    //
    // this.onAddTask.emit(newTask);
    // this.text = '';
    // this.day = '';
    // this.remainder = false;
  }

}
