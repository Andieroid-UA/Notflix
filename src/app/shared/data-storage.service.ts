import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient) {}

  storeSubscriptions() {
    const recipes = this.subscriptionService.getRecipes();
    this.http
    .put(
      'https://trialtracker-f66c4-default-rtdb.firebaseio.com/subscriptions.json',
      recipes
    )
    .subscribe(response => {
      console.log(response);
    });
  }

  fetchSubscriptions() {
    this.http
    .get()
    .subscribe(recipes => {
      console.log(recipes);
      this.subscriptionService.setRecipes(recipes);
    });
  }

}

