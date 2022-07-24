import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { WordIndexComponent, WordRoutes } from "./word";

const routes: Routes = [
  { path: '', component: UserComponent },
  {path: 'www', component: WordIndexComponent},
  ...WordRoutes,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
