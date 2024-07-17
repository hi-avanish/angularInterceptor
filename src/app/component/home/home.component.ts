import { Component } from '@angular/core';
import {logger} from "../../utils/DngLogger";
import {GroceryService} from "../../services/grocery.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private groceryService:GroceryService) {
  }

  InternalServer() {
    this.groceryService.internalServer().subscribe(res=>logger.info("InternalServer",res));
  }

  BadRequest() {
    this.groceryService.BadRequest().subscribe(res=>logger.info("BadRequest:",res));
  }
}
