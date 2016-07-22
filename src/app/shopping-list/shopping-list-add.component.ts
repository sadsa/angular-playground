import { Component, EventEmitter } from '@angular/core';
import { ListItem } from '../shared/list-item.model';
import { FormGroup, FormControl, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
    selector: 'shopping-list-add',
    template: `
        <h3>Add Items</h3>
        <form class="form-inline" >
            <div class="form-group">
                <label for="itemName">Name</label>
                <input type="text" 
                    class="form-control" 
                    id="itemName"
                    name="itemName" 
                    placeholder="Jane Doe" 
                    [(ngModel)]="listItem.name">
            </div>
            <div class="form-group">
                <label for="itemAmount">Amount</label>
                <input type="text" 
                    class="form-control" 
                    id="itemAmount" 
                    name="itemAmount" 
                    placeholder="£5.00" 
                    [(ngModel)]="listItem.amount">
            </div>
            <button class="btn btn-default" (click)="addShoppingItem(listItem)">Add Item</button>
        </form>
    `,
    directives: [ REACTIVE_FORM_DIRECTIVES ],
    outputs: [ 'addRequest' ]
})
export class ShoppingListAddComponent {
    listItem: ListItem = new ListItem('', null);
    addRequest = new EventEmitter<ListItem>();

    addShoppingItem(listItem:ListItem) {
        this.addRequest.emit(listItem);
    }
}