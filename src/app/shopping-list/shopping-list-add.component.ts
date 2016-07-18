import { Component, EventEmitter } from '@angular/core';
import { ListItem } from '../shared/list-item.model';

@Component({
    selector: 'shopping-list-add',
    template: `
        <form>
            <div class="input">
                <label for="item-name">Name</label>
                <input type="text" id="item-name" placeholder="Enter your name" [(ngModel)]="listItem.name">
            </div>
            <div class="input">
                <label for="item-amt">Amount</label>
                <input type="text" id="item-amt" placeholder="0" [(ngModel)]="listItem.amount">
            </div>
            <button (click)="addShoppingItem(listItem)">Add Item</button>
        </form>
    `,
    outputs: [ 'addRequest' ]
})
export class ShoppingListAddComponent {
    listItem: ListItem = new ListItem('', null);
    addRequest = new EventEmitter<ListItem>();

    addShoppingItem(listItem:ListItem) {
        this.addRequest.emit(listItem);
    }
}