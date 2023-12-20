import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Task } from '../Models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public task$: BehaviorSubject<Task[]>;
  private task: Task[] = [];
  folders: { name: string, count: number }[] = [];

  constructor(private http: HttpClient) {
    this.task$ = new BehaviorSubject<Task[]>([]);
    this.initFolders();
    // Example of updating a specific folder's count in the constructor
    const folderToUpdate = this.folders.find(folder => folder.name === 'Trials');
    if (folderToUpdate) {
      folderToUpdate.count += 1; // Update the count as needed
    }
  }

  private initFolders(): void {
    const folderToUpdate = this.folders.find(folder => folder.name === 'Trials');
    if (folderToUpdate) {
      folderToUpdate.count += 1; // Update the count as needed
    }
  }

  getTasks(): BehaviorSubject<Task[]> {
    return this.task$;
  }

  add(task: Task): void {
    const existingTask = this.task.find(p => p.company === task.company);
    if (existingTask) {
      Object.assign(existingTask, task);
    } else {
      this.task.push(task);
    }
    this.task$.next(this.task);
  }

  edit(updatedTask: Task): void {
    const taskIndex = this.task.findIndex(t => t.company === updatedTask.company);
    if (taskIndex !== -1) {
      this.task[taskIndex] = updatedTask;
      this.task$.next(this.task);
    }
  }

  remove(company: string): void {
    this.task = this.task.filter(p => p.company !== company);
    this.task$.next(this.task);
  }

  getFolders(folders: { name: string; count: number }[]): { name: string; count: number }[] {
    // You can modify this function to fetch folders from an API if needed
    this.folders = folders; // Assign the passed folders to the local variable
    return this.folders;
  }


  addNewFolder(folderName: string): void {
    // Logic to add a new folder
    const newFolder = { name: folderName, count: 0 };
    this.folders.push(newFolder);
    // Potentially, perform actions after adding the folder
  }



}
