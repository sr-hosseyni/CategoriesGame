import { IndexComponent } from "./index/index.component";
import { CreateComponent } from "./create/create.component";

const prefix = 'word';

export const WordRoutes = [
  {path: prefix, component: CreateComponent},
  {path: prefix + '/index', component: IndexComponent},
];
