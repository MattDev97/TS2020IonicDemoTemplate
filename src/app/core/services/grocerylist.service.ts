import { Injectable } from '@angular/core';
import * as mockData from '../models/mockData/mockGroceryList.json';
import { GroceryItem } from '../models/grocery-item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrocerylistService {

  private jsonData : any = mockData;
  private groceryList : Array<GroceryItem> = [];

  public groceryListObservable$ : BehaviorSubject<GroceryItem[]>;

  constructor() { 
    this.groceryList = this.jsonData.default;
    this.groceryListObservable$ = new BehaviorSubject<GroceryItem[]>(this.groceryList);
  }

  getGroceryItem(id: number) {
    return this.groceryList.filter(item => item.id === id)[0];
  }

  putGroceryItem(itemToPut : GroceryItem) {
    this.groceryList.push(itemToPut);
    this.groceryListObservable$.next(this.groceryList);
  }

  removeGroceryItem(id: number) {
    try {
      let index = this.groceryList.findIndex(item => item.id === id);

      this.groceryList = this.groceryList.slice(index, 1);
      this.groceryListObservable$.next(this.groceryList);

      return true;
    } catch(e) {
      return false;
    }
  }

  editGroceryItem(itemToReplace : GroceryItem) {
    try {
      let index = this.groceryList.findIndex(item => item.id === itemToReplace.id);

      this.groceryList[index] = itemToReplace;
      this.groceryListObservable$.next(this.groceryList);
    } catch(e) {
      console.error('Grocery Item not found in list with id: ' + itemToReplace.id);
    }
  }


}
