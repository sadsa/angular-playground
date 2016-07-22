import { Component, OnInit } from '@angular/core';
import { ListItem } from '../shared/list-item.model';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { ShoppingListEditComponent } from './shopping-list-edit.component';
import { ShoppingListService } from './shopping-list.service';

@Component({
    selector: 'shopping-list',
    templateUrl: './app/shopping-list/shopping-list.component.html',
    directives: [ ShoppingListAddComponent, ShoppingListEditComponent ],
    inputs: [ 'addRequest' ],
    providers: [ ShoppingListService ]
})
export class ShoppingListComponent implements OnInit{
    public listItems: ListItem[];

    constructor(private shoppingListService:ShoppingListService) {}

    ngOnInit() {
        this.listItems = this.shoppingListService.getItems();
    }

    addShoppingItem(listItem:ListItem) {
        let item = new ListItem(listItem.name, listItem.amount);
        this.shoppingListService.addItem(item);
    }
}