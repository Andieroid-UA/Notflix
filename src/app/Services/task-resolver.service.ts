import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Task } from '../Models/task.model';
import { DataStorageService } from './data-storage.service';
import { Observable } from 'rxjs';
import { TaskService } from './task.service';

@Injectable({ providedIn: 'root' })

export class TaskResolverService implements Resolve<Task[]> {

constructor(
  private dataStorageService: DataStorageService,
  private taskService: TaskService

  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const tasks = this.taskService.getTasks().value;

    if (tasks.length === 0) {
      return this.dataStorageService.fetchTasks();
    } else {
      return tasks;
    }
  }



}
