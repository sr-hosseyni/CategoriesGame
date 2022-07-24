import { IndexComponent } from "./index/index.component";
import { CreateComponent } from "./create/create.component";
import { ViewComponent } from "./view/view.component";
import { EditComponent } from "./edit/edit.component";

const prefix = 'players';

export const PlayersRoutes = [
  {path: prefix, component: IndexComponent},
  {path: prefix + '/index', redirectTo: prefix},
  {path: prefix + '/create', component: CreateComponent},
  {path: prefix + '/:playerId', component: ViewComponent},
  {path: prefix + '/:playerId/edit', component: EditComponent},
];
