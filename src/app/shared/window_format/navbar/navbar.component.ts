import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataStorageService } from '../../../Services/data-storage.service';
import { AuthService } from '../../../auth/auth.service';

import { TaskService } from '../../../Services/task.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{

  isAuthenticated = false;
  private userSub: Subscription;
  show: any;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,


  //*****************************Test function to see if local storage works****************************************
    // private taskService: TaskService,

  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  onSaveData() {
    this.dataStorageService.storeTasks();
  }

  onFetchData() {
    this.dataStorageService.fetchTasks();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

//*****************************Test function to see if local storage works****************************************

  // setValue() {
  //   this.taskService.setItem('my_thing', 'something');
  // }

}
