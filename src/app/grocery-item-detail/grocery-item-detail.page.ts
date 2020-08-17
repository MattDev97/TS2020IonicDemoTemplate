import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GrocerylistService } from '../core/services/grocerylist.service';
import { GroceryItem } from '../core/models/grocery-item';

@Component({
  selector: 'app-grocery-item-detail',
  templateUrl: './grocery-item-detail.page.html',
  styleUrls: ['./grocery-item-detail.page.scss'],
})
export class GroceryItemDetailPage implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private groceryListService : GrocerylistService) { }

  groceryItem : GroceryItem;

  ngOnInit() {
    let id = JSON.parse(this.activatedRoute.snapshot.paramMap.get('id'));
    this.groceryItem = this.groceryListService.getGroceryItem(id);
  }

}
