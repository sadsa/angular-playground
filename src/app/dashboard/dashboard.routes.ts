import { RouterConfig }  from '@angular/router';
import { DashboardComponent } from './dashboard.component';
 
export const dashboardRoutes: RouterConfig = [
    {
        path: '',
        redirectTo: '/dashboard'
    },    
    {
        path: 'dashboard',
        component: DashboardComponent
    }
]