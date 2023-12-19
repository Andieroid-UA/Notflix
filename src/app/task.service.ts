import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from './task.model';
// import { staticTask } from './static-task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  task$: BehaviorSubject<Task[]>;
  task: Array<Task> = [];

  constructor() {
    this.task$ = new BehaviorSubject([]);
    // this.task = staticTask;
  }

  getAll() {
    this.task$.next(this.task);
  }

  // add(task: Task) {
  //   this.task.push(task);
  //   let findElem = this.task.find(p => p.company == task.company);

  //   findElem.company = task.company;
  //   findElem.date = task.date;
  //   findElem.type = task.type;
  //   findElem.price = task.price;
  //   findElem.category = task.category;

  //   this.task$.next(this.task);
  // }

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
  

  // edit(task: Task) {
  //   let findElem = this.task.find(p => p.company == task.company);

  //   findElem.company = task.company;
  //   findElem.date = task.date;
  //   findElem.type = task.type;
  //   findElem.price = task.price;

  //   this.task$.next(this.task);
  // }

  edit(updatedTask: Task) {
    const taskIndex = this.task.findIndex(t => t.company === updatedTask.company);
    if (taskIndex !== -1) {
      this.task[taskIndex] = updatedTask;
      this.task$.next(this.task);
    }
  }







  remove(company: string) {
    this.task = this.task.filter(p => {
      return p.company != company
    });

    this.task$.next(this.task);
  }
}
