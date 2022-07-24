import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PlayersRoutes } from "./players";
import { CategoriesRoutes } from './categories';
import { GamesRoutes } from "./games";
import { UsersRoutes } from "./users";

const routes: Routes = [
  {path: '', component: HomeComponent},
  ...PlayersRoutes,
  ...CategoriesRoutes,
  ...GamesRoutes,
  ...UsersRoutes,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
