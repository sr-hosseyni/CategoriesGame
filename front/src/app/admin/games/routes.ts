import { IndexComponent } from "./index/index.component";
import { CreateComponent } from "./create/create.component";
import { ViewComponent } from "./view/view.component";
import { EditComponent } from "./edit/edit.component";

const prefix = 'games';

export const GamesRoutes = [
  {path: prefix, component: IndexComponent},
  {path: prefix + '/index', redirectTo: prefix},
  {path: prefix + '/create', component: CreateComponent},
  {path: prefix + '/:gameId', component: ViewComponent},
  {path: prefix + '/:gameId/edit', component: EditComponent},
];
