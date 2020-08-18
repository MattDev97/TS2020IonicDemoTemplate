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

  filteredList : GroceryItem[];

  constructor(private router : Router) { }

  ngOnInit() {
    this.filteredList = this.groceryList;
  }

  goToItemDetail(id) {
    this.router.navigate(['grocery-item-detail',JSON.stringify(id)]);
  }

  filterList(event) {
    console.log('Input!');
    const query = event.target.value.toLowerCase();
    this.filteredList = this.groceryList.filter(item => item.name.toLowerCase().includes(query));
  }
}
