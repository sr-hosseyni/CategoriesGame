import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PlayersIndexComponent } from "./players";
import {
  CategoriesViewComponent,
  CategoriesEditComponent,
  CategoriesIndexComponent,
  CategoriesCreateComponent
} from './categories';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    PlayersIndexComponent,
    CategoriesViewComponent,
    CategoriesEditComponent,
    CategoriesIndexComponent,
    CategoriesCreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
  ],
  exports: [
    // MenuComponent
  ]
})
export class AdminModule {
}
