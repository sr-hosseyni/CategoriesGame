import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GameComponent } from "./game/game.component";
import { IndexComponent } from "./players/index/index.component";
import { ViewComponent } from "./players/view/view.component";
import { EditComponent } from "./players/edit/edit.component";
import { CreateComponent } from "./players/create/create.component";

@NgModule({
  declarations: [
    GameComponent,
    GamesComponent,
    HomeComponent,
    MenuComponent,
    IndexComponent,
    ViewComponent,
    EditComponent,
    CreateComponent,
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
