import { IndexComponent } from "./index/index.component";
import { CreateComponent } from "./create/create.component";
import { ViewComponent } from "./view/view.component";
import { EditComponent } from "./edit/edit.component";

const prefix = 'users';

export const UsersRoutes = [
  {path: prefix, component: IndexComponent},
  {path: prefix + '/index', redirectTo: prefix},
  {path: prefix + '/create', component: CreateComponent},
  {path: prefix + '/:userId', component: ViewComponent},
  {path: prefix + '/:userId/edit', component: EditComponent},
];
