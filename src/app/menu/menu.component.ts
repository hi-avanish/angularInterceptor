import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        route: '/home'
      },
      {
        label: 'Item Master- Without Interceptors',
        route: '/items-tranditional'
      },
      {
        label: 'Item Master',
        route: '/items'
      }
    ];
  }
}
