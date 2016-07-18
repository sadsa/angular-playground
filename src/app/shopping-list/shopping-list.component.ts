import { Component } from '@angular/core';
import { ListItem } from '../shared/list-item.model';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { ShoppingListEditComponent } from './shopping-list-edit.component';

@Component({
    selector: 'shopping-list',
    template: `
        <header>
            <div class="brand">
                Shopping List
            </div>
        </header>
        <div class="main">
            <section>
                <shopping-list-add (addRequest)="addShoppingItem($event)"></shopping-list-add>
            </section>
            <section>
                <h3>My Shopping Items</h3>
                <ul class="list">
                    <li *ngFor="let item of listItems">
                        {{ item.name }} ({{ item.amount }})
                    </li>
                </ul>
            </section>
            <section>
                <shopping-list-edit></shopping-list-edit>
            </section>
        </div>
    `,
    directives: [ ShoppingListAddComponent, ShoppingListEditComponent ],
    inputs: [ 'addRequest' ]
})
export class ShoppingListComponent {
    listItems: ListItem[] = [];

    addShoppingItem(listItem:ListItem) {
        let item = new ListItem(listItem.name, listItem.amount);
        this.listItems.push(item);
    }
}