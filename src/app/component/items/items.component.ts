import {Component, OnInit} from '@angular/core';
import {GroceryService} from "../../services/grocery.service";
import {logger} from "../../utils/DngLogger";
import {Observable} from "rxjs";
import {GroceryItem} from "../../domains/GroceryItem";
import {Column} from "../../domains/Column";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements  OnInit {
  cols!: Column[];
  grocery$: Observable<GroceryItem[]> | undefined;
  constructor(private groceryService:GroceryService) {
  }

    ngOnInit(): void {
    logger.info('Loading Items:');
    this.grocery$=this.groceryService.fetchItems();
      this.cols = [
        { field: 'id', header: 'Id' },
        { field: 'name', header: 'Name' },
       { field: 'quantity', header: 'Quantity' }, { field: 'category', header: 'Category' }
      ];
    }



}
