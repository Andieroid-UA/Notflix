import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Task } from '../Models/task.model';
import { DataStorageService } from './data-storage.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class TaskResolverService implements Resolve<Task[]> {

  taskService: any;
  dataStorageService: any;
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Task[] | Observable<Task[]> | Promise<Task[]> {
    const tasks = this.taskService.getTasks();

    if (tasks.length === 0) {
      return this.dataStorageService.fetchTasks();
    } else {
      return tasks;
    }
  }



}
