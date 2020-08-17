import { Component, OnInit, OnDestroy } from '@angular/core';
import { GrocerylistService } from '../core/services/grocerylist.service';
import { GroceryItem } from '../core/models/grocery-item';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  public groceryList: GroceryItem[];
  public appTitle: String = 'Grocery List';

  constructor(private groceryListService: GrocerylistService) {}

  ngOnInit() {
    this.groceryListService.groceryListObservable$.subscribe({
      next: (list) => this.groceryList = list
    });
  }

  ngOnDestroy() {
    this.groceryListService.groceryListObservable$.unsubscribe();
  }

}
