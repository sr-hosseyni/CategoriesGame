import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from "./home/home.component";
import { GameComponent } from "./game/game.component";
import {
  PlayersCreateComponent,
  PlayersIndexComponent,
  PlayersEditComponent,
  PlayersViewComponent
} from "./players";
import { CategoriesRoutes } from './categories';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'games', component: GamesComponent, children: [
      {path: ':id', component: GameComponent}
    ]
  },
  {path: 'players', component: PlayersIndexComponent},
  {path: 'players/index', component: PlayersIndexComponent},
  {path: 'players/create', component: PlayersCreateComponent},
  {path: 'players/:playerId', component: PlayersViewComponent},
  {path: 'players/:playerId/edit', component: PlayersEditComponent},
  ...CategoriesRoutes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
