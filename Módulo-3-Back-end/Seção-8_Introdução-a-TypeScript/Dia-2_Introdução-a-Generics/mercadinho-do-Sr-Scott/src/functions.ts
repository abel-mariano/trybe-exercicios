import { Food } from './types/Food';
import { Drink } from './types/Drink';
import { CartItem } from './types/CartItem';

export function buildCartItem({ name, price }: Food | Drink, quantity: number): CartItem {
  return { name, price, quantity } as CartItem;
}

export function first<Type>(items: Type[]): Type {
  return items[0];
}

export function updateItem<Type>(items: Type[], index: number, updatedItem: Type): Type[] {
  if (index >= 0 && index < items.length) items.splice(index, 1, updatedItem);
  return items;
}