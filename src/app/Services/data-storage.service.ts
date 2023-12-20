import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskService } from './task.service';
import { Task } from '../Models/task.model';
import { map, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private http: HttpClient, private taskService: TaskService) {}

  private firebaseRootURL = "https://trialtracker-f66c4-default-rtdb.firebaseio.com/tasks.json";

  storeTasks() {
    const tasks = this.taskService.getTasks();
    this.http.put('https://trialtracker-f66c4-default-rtdb.firebaseio.com/tasks.json', tasks)
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

  saveFoldersToFirebase() {
    const folders = this.taskService.getFolders();

    this.http.put(this.firebaseRootURL, folders).subscribe(
      res => {
        console.log("Firebase DB Response:", res);
      },
      error => {
        console.error("Error saving to Firebase:", error);
      }
    );
  }

  fetchFoldersFromFirebase() {
    return this.http.get(this.firebaseRootURL).subscribe(
      (res: any) => {
        if (res) {
          const folders: Folder[] = Object.keys(res).map(key => ({
            name: res[key].name,
            count: res[key].count
          }));
          this.folderService.setFolders(folders);
        }
      },
      error => {
        console.error("Error fetching from Firebase:", error);
      }
    );
  }

}

