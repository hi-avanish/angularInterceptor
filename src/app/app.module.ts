import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoggingInterceptor} from "./common/logging.interceptor";
import { ItemsMasterComponent } from './items-master/items-master.component';
import {TableModule} from "primeng/table";
import {ProductService} from "./services/product.service";
import { MenuComponent } from './menu/menu.component';
import {MenubarModule} from "primeng/menubar";
import {BadgeModule} from "primeng/badge";
import {AvatarModule} from "primeng/avatar";
import { ItemsComponent } from './component/items/items.component';
import {ErrorHandlerInterceptor} from "./common/error-handler.interceptor";
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";
import {provideToastr, ToastrModule} from "ngx-toastr";
import { HomeComponent } from './component/home/home.component';
import { ItemsTranditionalComponent } from './component/items-tranditional/items-tranditional.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsMasterComponent,
    MenuComponent,
    ItemsComponent,
    HomeComponent,
    ItemsTranditionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    MenubarModule,
    BadgeModule,
    AvatarModule, HttpClientModule, ButtonModule,BrowserAnimationsModule, // required animations module

    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true
  },
    {
      provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true
    },

    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
    ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
