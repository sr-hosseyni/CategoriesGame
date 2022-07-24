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
import {
  GamesViewComponent,
  GamesEditComponent,
  GamesIndexComponent,
  GamesCreateComponent
} from './games';
import {
  UsersViewComponent,
  UsersEditComponent,
  UsersIndexComponent,
  UsersCreateComponent
} from './users';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    PlayersIndexComponent,
    CategoriesViewComponent,
    CategoriesEditComponent,
    CategoriesIndexComponent,
    CategoriesCreateComponent,
    GamesViewComponent,
    GamesEditComponent,
    GamesIndexComponent,
    GamesCreateComponent,
    UsersViewComponent,
    UsersEditComponent,
    UsersIndexComponent,
    UsersCreateComponent,
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
