import { Injectable } from '@angular/core';
import * as mockData from '../models/mockData/mockGroceryList.json';
import { GroceryItem } from '../models/grocery-item';

@Injectable({
  providedIn: 'root'
})
export class GrocerylistService {

  private jsonData : any = mockData;
  private groceryList : Array<GroceryItem> = [];

  constructor() { 
    this.groceryList = this.jsonData.default;
  }

  getEntireGroceryList() {
    return this.groceryList;
  }

  getGroceryItem(id: number) {
    return this.groceryList.filter(item => item.id === id)[0];
  }

  putGroceryItem(itemToPut : GroceryItem) {
    return this.groceryList.push(itemToPut);
  }

  


}
