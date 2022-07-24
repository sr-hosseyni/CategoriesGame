import { IndexComponent } from "./index/index.component";
import { CreateComponent } from "./create/create.component";
import { ViewComponent } from "./view/view.component";
import { EditComponent } from "./edit/edit.component";

const prefix = 'categories';

export const CategoriesRoutes = [
  {path: prefix, component: IndexComponent},
  {path: prefix + '/index', redirectTo: prefix},
  {path: prefix + '/create', component: CreateComponent},
  {path: prefix + '/:categoryId', component: ViewComponent},
  {path: prefix + '/:categoryId/edit', component: EditComponent},
];
