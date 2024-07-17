import {Component, OnInit} from '@angular/core';
import {logger} from "./utils/DngLogger";
import {GroceryService} from "./services/grocery.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  title = 'angular-http-interceptor';

  constructor() {


  }

  ngOnInit(): void {
    logger.info('You are good to go use our logger :)');
  }


}
