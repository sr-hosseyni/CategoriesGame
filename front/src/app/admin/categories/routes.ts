import { IndexComponent } from "./index/index.component";
import { CreateComponent } from "./create/create.component";
import { ViewComponent } from "./view/view.component";
import { EditComponent } from "./edit/edit.component";

export const CategoriesRoutes = [
  {path: 'categories', component: IndexComponent},
  {path: 'categories/index', component: IndexComponent},
  {path: 'categories/create', component: CreateComponent},
  {path: 'categories/:categoryId', component: ViewComponent},
  {path: 'categories/:categoryId/edit', component: EditComponent},
];
