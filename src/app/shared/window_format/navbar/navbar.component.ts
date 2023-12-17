import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataStorageService } from '../../data-storage.service';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{
  isAuthenticated = false;
  private userSub: Subscription | undefined;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
    ) {}

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
    }

    onSaveData() {
      this.dataStorageService.storeSubscriptions();
    }

    // onFetchData() {
    //   this.dataStorageService.fetchSubscriptions().subscribe();
    // }
  }
