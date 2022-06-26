import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from "./home/home.component";
import { GameComponent } from "./game/game.component";
import { IndexComponent } from "./players/index/index.component";
import { ViewComponent } from "./players/view/view.component";
import { CreateComponent } from "./players/create/create.component";
import { EditComponent } from "./players/edit/edit.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'games', component: GamesComponent, children: [
      {path: ':id', component: GameComponent}
    ]
  },
  {path: 'players', component: IndexComponent},
  {path: 'players/index', component: IndexComponent},
  {path: 'players/create', component: CreateComponent},
  {path: 'players/:playerId', component: ViewComponent},
  {path: 'players/:playerId/edit', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
