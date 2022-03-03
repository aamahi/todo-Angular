import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Task } from '../Task';
import { TASKS } from '../mock-task';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions={
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private apiUrl = "http://localhost:5000/tasks"

  constructor(private http:HttpClient) { }

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateToggleRemainder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>( url, task, httpOptions );
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions );
  }
}
