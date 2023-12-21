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
    console.log("task list", this.task, task);
    console.log(task);
    let existingTask = this.task.find(p => p.id === task.id);
    if (existingTask) {
      console.log("I found an existing task to edit");
      existingTask.date = task.date;
      existingTask.type = task.type;
      existingTask.price = task.price;
      existingTask.category = task.category;
      existingTask.company = task.company;
    }
    else {
      console.log("I found no existing task");
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
