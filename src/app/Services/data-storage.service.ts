import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskService } from './task.service';
import { Task } from '../Models/task.model';
import { exhaustMap, map, take, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  // *VARIABLES*
  firebaseRootURL =
  "https://trialtracker-f66c4-default-rtdb.firebaseio.com/tasks.json";

  // *INJECTIONS*
  constructor(
    private http: HttpClient,
    private taskService: TaskService,
    private authService: AuthService
    ) {}


  // Method- Save tasks
  storeTasks() {
    const books = this.taskService.getTasks();

    this.http.put(this.firebaseRootURL, books).subscribe(res => {
      console.log("Firebase DB Response:", res);
    });
  }

  // Method- Fetch tasks
  fetchTasks() {
    return this.http
      .get(this.firebaseRootURL, {}).pipe(
        tap ((tasks: Task[]) => {
          this.taskService.setTasks(tasks);
        })
      );
  }

  //   storeTasks() {
  //     const tasks = this.taskService.getTasks().getValue(); // Extract the value from BehaviorSubject

  //     this.http.put(
  //       'https://trialtracker-f66c4-default-rtdb.firebaseio.com/tasks.json',
  //       tasks
  //     )
  //     .subscribe(response => {
  //       console.log(response);
  //     });
  //   }


  // fetchTasks() {
  //   return this.authService.user.pipe(
  //     take(1),
  //     exhaustMap(user => {
  //     return this.http.get<Task[]>(
  //       'https://trialtracker-f66c4-default-rtdb.firebaseio.com/tasks.json',
  //       {
  //         params: {
  //           auth: user.token
  //         }
  //       }
  //     );
  //   }),
  //     map(tasks => {
  //       return tasks.map(task => {
  //         return {
  //           ...task,
  //           tasks: task.tasks ? task.tasks : []
  //         };
  //       });
  //     }),
  //     tap(tasks => {
  //       this.taskService.getTasks().next(tasks); // Pass the tasks as an argument
  //     })
  //   )
  //   .subscribe(() => {
  //     console.log('Tasks fetched successfully');
  //   });

  // }
}

