import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from './mock-tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(TASKS);
  }
}
