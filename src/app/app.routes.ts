import { provideRouter, RouterConfig }  from '@angular/router';
import { shoppingListRoutes }  from './shopping-list/shopping-list.routes';
import { AppComponent }  from './app.component';

const appRoutes: RouterConfig = [
    ...shoppingListRoutes
];

export const appRouterProviders = [
    provideRouter(appRoutes)
]

