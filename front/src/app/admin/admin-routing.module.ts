import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PlayersRoutes } from "./players";
import { CategoriesRoutes } from './categories';

const routes: Routes = [
  {path: '', component: HomeComponent},
  ...PlayersRoutes,
  ...CategoriesRoutes,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
