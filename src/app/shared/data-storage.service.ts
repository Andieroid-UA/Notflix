import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient) {}

  storeRecipes() {
    // const recipes = this.recipeService.getRecipes();
    // this.http.put(trialtracker-f66c4-default-rtdb.firebaseio.com/+ this.id + .json' , id)
    //   .subscribe(response => {
    //     console.log(response);
    //   });
  }

}

