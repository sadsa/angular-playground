import { Component } from '@angular/core';
import { ListItem } from '../shared/list-item.model';

@Component({
    selector: 'shopping-list',
    template: `
        <section>
            New Item
        </section>
        <section>
            <h3>My List</h3>
            <div class="list">
            </div>
        </section>
        <section>
            Edit
        </section>        
    `
})
export class ShoppingListComponent {
    listItems:Array<ListItem>;
}