import { Component, OnInit, Input } from '@angular/core';
import { GroceryItem } from '../core/models/grocery-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss'],
})
export class GroceryListComponent implements OnInit {

  @Input() public groceryList : GroceryItem[];

  constructor(private router : Router) { }

  ngOnInit() {}

  goToItemDetail(id) {
    this.router.navigate(['grocery-item-detail',JSON.stringify(id)]);
  }
}
