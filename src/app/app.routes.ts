import { provideRouter, RouterConfig }  from '@angular/router';
import { shoppingListRoutes }  from './shopping-list/shopping-list.routes';
import { dashboardRoutes }  from './dashboard/dashboard.routes';
import { AppComponent }  from './app.component';

const appRoutes: RouterConfig = [
    ...shoppingListRoutes,
    ...dashboardRoutes
];

export const appRouterProviders = [
    provideRouter(appRoutes)
]

