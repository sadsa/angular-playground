import { Component } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    template: `
        <h1 class="title">Experiments</h1>
        <nav>
            <a [routerLink]="['/shopping-list']">Shopping List</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ ROUTER_DIRECTIVES ]
})
export class AppComponent {
    title = 'app works!';
}
