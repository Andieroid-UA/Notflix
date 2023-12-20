import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataStorageService } from '../../../Services/data-storage.service';
import { AuthService } from '../../../auth/auth.service';

import { TaskService } from '../../../Services/task.service';
import { Task } from '../../../Models/task.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{

  isAuthenticated = false;
  private userSub: Subscription;
  private taskSub: Subscription;
  show: any;
  myTasks: Task[];

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,

  //*****************************Test function to see if local storage works****************************************

    private taskService: TaskService,

  //*********************************************** **************************************************************//

  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });

    this.taskSub = this.taskService.tasksChanged.subscribe(
      (tasks: Task[]) => {
        this.myTasks = tasks;
        console.log(tasks);
      }
    );
  }


  ngOnDestroy() {
    this.taskSub.unsubscribe();
  }


  onSaveData() {
    this.dataStorageService.storeTasks();
  }

  onFetchData() {
    this.dataStorageService.fetchTasks().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

//*****************************Test function to see if local storage works****************************************

  setValue() {
    this.taskService.setItem('my_thing', 'something');
  }

//*********************************************** **************************************************************//

}
