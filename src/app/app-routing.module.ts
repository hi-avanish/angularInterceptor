import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemsMasterComponent} from "./items-master/items-master.component";
import {ItemsComponent} from "./component/items/items.component";
import {HomeComponent} from "./component/home/home.component";
import {ItemsTranditionalComponent} from "./component/items-tranditional/items-tranditional.component";


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home',component: HomeComponent },
  { path: 'items-master',component: ItemsMasterComponent },
  { path: 'items',component: ItemsComponent },
  { path: 'items-tranditional',component: ItemsTranditionalComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
