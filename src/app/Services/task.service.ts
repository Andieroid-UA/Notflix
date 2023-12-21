import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Task } from '../Models/task.model';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  tasksChanged = new BehaviorSubject<Task[]>([]);

  public task$: BehaviorSubject<Task[]>;

  public task: Task[] = [];

  folders: { name: string, count: number }[] = [];

  private myTasks: Task[] = [];


  constructor(private http: HttpClient) {
    this.task$ = new BehaviorSubject<Task[]>([]);
    this.initFolders();
    // Example of updating a specific folder's count in the constructor
    const folderToUpdate = this.folders.find(folder => folder.name === 'Trials');
    if (folderToUpdate) {
      folderToUpdate.count += 1; // Update the count as needed
    }

  }

  //*****************************Test function to see if local storage works****************************************//
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
 //*********************************************** **************************************************************//

  private initFolders(): void {
    const folderToUpdate = this.folders.find(folder => folder.name === 'Trials');
    if (folderToUpdate) {
      folderToUpdate.count += 1; // Update the count as needed
    }
  }

  // setTasks(tasks: Task[]) {
  //   this.task = tasks;
  //   this.tasksChanged.next(this.task.slice());
  // }

  setTasks(tasks: Task[] | []) {
    console.log('%c  tasks: ', 'color: red;', tasks);

    this.myTasks = tasks || [];
    this.tasksChanged.next(this.myTasks.slice());
}

  getTasks(): BehaviorSubject<Task[]> {
    return this.task$;
  }

  getTask(index: number) {
    return this.task[index];
  }

  add(task: Task, saveToLocal: boolean): void {
    console.log("I am in task.service add function with task ", task);
    console.log("the total list of tasks I can see is", this.task);

    var newId = 1;
    if( this.task.length > 0)
    {
      console.log("time to search for the highest existing id value");
      var max = this.task.reduce((prev, current) => (prev && prev.id > current.id) ? prev : current);
      console.log("max", max);
      newId = max.id + 1;
    }
    task.id = newId;


    if( saveToLocal == true ) {
      localStorage.setItem("listoftasks", JSON.stringify(this.task));
    }
    else {
      // this is the use-case for auto-loading tasks, populate the task list and the ui
      console.log("I am trying to push to the tasks list task ", task);
      this.task.push(task);
      this.task$.next(this.task);
      console.log("the resulting list of tasks is ", this.task);
    }

    const existingTask = this.task.find(p => p.id === task.id);
    if (existingTask) {
      Object.assign(existingTask, task);
    } else {
      this.task.push(task);
    }
    this.task$.next(this.task);
  }

  edit(updatedTask: Task, updatedIdValue: number): void {
    console.log("I am in task.service edit function with task ", updatedTask, "and id value", updatedIdValue);
    const taskIndex = this.task.findIndex(t => t.id === updatedIdValue);
    if (taskIndex !== -1) {
      updatedTask.id = updatedIdValue;
      console.log("I have found a task to edit in task service edit function~!~~~!!!!!");
      this.task[taskIndex] = updatedTask;
      this.task$.next(this.task);
      localStorage.setItem("listoftasks", JSON.stringify(this.task));
    }
  }

  remove(id: number): void {
    this.task = this.task.filter(p => p.id !== id);
    localStorage.setItem("listoftasks", JSON.stringify(this.task));
    this.task$.next(this.task);
  }

  getFolders(folders: { name: string; count: number }[]): { name: string; count: number }[] {
    this.folders = folders; // Assign the passed folders to the local variable
    return this.folders;
  }


  addNewFolder(folderName: string): void {
    // Logic to add a new folder
    const newFolder = { name: folderName, count: 0 };
    this.folders.push(newFolder);
  }

}
