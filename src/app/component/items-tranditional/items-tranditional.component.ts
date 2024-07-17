import { Component } from '@angular/core';
import {Column} from "../../domains/Column";
import {Observable} from "rxjs";
import {GroceryItem} from "../../domains/GroceryItem";
import {GroceryService} from "../../services/grocery.service";
import {logger} from "../../utils/DngLogger";

@Component({
  selector: 'app-items-tranditional',
  templateUrl: './items-tranditional.component.html',
  styleUrls: ['./items-tranditional.component.scss']
})
export class ItemsTranditionalComponent {
  cols!: Column[];
  grocery$: Observable<GroceryItem[]> | undefined;
  constructor(private groceryService:GroceryService) {
  }

  ngOnInit(): void {
    logger.info('Loading Items:');
    this.grocery$=this.groceryService.getData();
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'quantity', header: 'Quantity' }, { field: 'category', header: 'Category' }
    ];
  }


}
