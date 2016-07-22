import { Injectable } from '@angular/core';
import { ListItem } from '../shared/list-item.model';

@Injectable()
export class ShoppingListService {
  public listItems: ListItem[] = [];

  addItem(item:ListItem) {
    this.listItems.push(item);
  }

  getItems(): ListItem[] {
    return this.listItems;
  }

}
