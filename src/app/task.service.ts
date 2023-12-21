import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from './task.model';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  task$: BehaviorSubject<Task[]>;
  task: Array<Task> = [];
  tasksSubject: any;
    tasks$: any;

  constructor() {
    this.task$ = new BehaviorSubject([]);
   
  }

  getAll() {
    this.task$.next(this.task);
  }

  getActiveSubscriptionsCount(): number {

    return this.tasksSubject.value.filter(task => task.isActive).length;
  }

   /* Add A Subscription */
  add(task: Task) {
    let existingTask = this.task.find(p => p.company === task.company);
    if (existingTask) {
   
      existingTask.date = task.date;
      existingTask.type = task.type;
      existingTask.price = task.price;
      existingTask.category = task.category;
    } else {
 
      this.task.push(task);
    }
  
    this.task$.next(this.task);
  }
  

   /* Edit A Subscription */
  edit(updatedTask: Task) {
    const taskIndex = this.task.findIndex(t => t.company === updatedTask.company);
    if (taskIndex !== -1) {
      this.task[taskIndex] = updatedTask;
      this.task$.next(this.task);
    }
  }


   /* Delete A Subscription */

  delete(company: string) {
    this.task = this.task.filter(task => task.company !== company); 
    this.task$.next(this.task);
  }


}
