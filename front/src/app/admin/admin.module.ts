import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GameComponent } from "./game/game.component";
import {
  PlayersCreateComponent,
  PlayersIndexComponent,
  PlayersEditComponent,
  PlayersViewComponent
} from "./players";
import {
  CategoriesViewComponent,
  CategoriesEditComponent,
  CategoriesIndexComponent,
  CategoriesCreateComponent
} from './categories';

@NgModule({
  declarations: [
    GameComponent,
    GamesComponent,
    HomeComponent,
    MenuComponent,
    PlayersCreateComponent,
    PlayersIndexComponent,
    PlayersEditComponent,
    PlayersViewComponent,
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
