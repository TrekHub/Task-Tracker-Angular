import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}  from '@angular/common/http'
import { from, Observable, of } from 'rxjs';
import { Task } from '../task';
import { Tasks } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) { }



// method to get all tasks
  getTasks(): Observable<Task[]> {
    
    return this.http.get<Task[]>(this.baseUrl);


  }

//delete task function
deleteTask(task: Task) {
  const deleteUrl = `${this.baseUrl}/${task.id}`
  return this.http.delete<Task>(deleteUrl)
}
}
