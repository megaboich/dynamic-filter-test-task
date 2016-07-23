import { provideRouter, RouterConfig } from '@angular/router';

import { IndexComponent } from './index.component'
import { TasksListComponent } from './tasks-list/tasks-list.component'

export const routes: RouterConfig = [
    { path: '', component: IndexComponent },
    { path: 'tasks', component: TasksListComponent },
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
];