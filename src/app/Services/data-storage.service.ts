import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskService } from './task.service';
import { Task } from '../Models/task.model';
import { map, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(
    private http: HttpClient,
    private taskService: TaskService,
    private authService: AuthService
    ) {}

    storeTasks() {
      const tasks = this.taskService.getTasks().getValue(); // Extract the value from BehaviorSubject

      this.http.put(
        'https://trialtracker-f66c4-default-rtdb.firebaseio.com/tasks.json',
        tasks
      )
      .subscribe(response => {
        console.log(response);
      });
    }


  fetchTasks() {
    this.http
      .get<Task[]>(
        'https://trialtracker-f66c4-default-rtdb.firebaseio.com/tasks.json'
      )
      .pipe(
        map(tasks => {
          return tasks.map(task => {
            return {
              ...task,
              tasks: task.tasks ? task.tasks : []
            };
          });
        }),
        tap(tasks => {
          this.taskService.getTasks().next(tasks);
        })
      )
      .subscribe(() => {
        console.log('Tasks fetched successfully');
      });
  }

}

