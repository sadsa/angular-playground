import { Component } from '@angular/core';
import { ListItem } from '../shared/list-item.model';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { ShoppingListEditComponent } from './shopping-list-edit.component';

@Component({
    selector: 'shopping-list',
    templateUrl: './app/shopping-list/shopping-list.component.html',
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