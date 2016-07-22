/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ShoppingListService } from './shopping-list.service';

describe('ShoppingList Service', () => {
  beforeEachProviders(() => [ShoppingListService]);

  it('should ...',
      inject([ShoppingListService], (service: ShoppingListService) => {
    expect(service).toBeTruthy();
  }));
});
