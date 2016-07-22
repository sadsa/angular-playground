import { provideRouter, RouterConfig }  from '@angular/router';
import { shoppingListRoutes }  from './shopping-list/shopping-list.routes';
import { dashboardRoutes }  from './dashboard/dashboard.routes';
import { AppComponent }  from './app.component';

const appRoutes: RouterConfig = [
    {
        path: '',
        children: [
            ...shoppingListRoutes,
            ...dashboardRoutes
        ]        
    }
];

export const appRouterProviders = [
    provideRouter(appRoutes)
]

