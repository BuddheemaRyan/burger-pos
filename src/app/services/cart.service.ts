import { computed, Injectable, signal } from '@angular/core';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items = signal<CartItem[]>([]);

  readonly cartItems = this.items.asReadonly();

  readonly itemCount = computed(() =>
    this.items().reduce((sum, item) => sum + item.quantity, 0));

  readonly subtotal = computed(() =>
    this.items().reduce((sum, item) => sum + item.price * item.quantity, 0));

  readonly tax = computed(() => Math.round(this.subtotal() * 0.08));

  readonly total = computed(() => this.subtotal() + this.tax());

  addItem(newItem: CartItem): void {
    this.items.update(items => {
      const existing = items.find(i => i.id === newItem.id);
      if (existing) {
        return items.map(i =>
          i.id === newItem.id ? { ...i, quantity: i.quantity + newItem.quantity } : i
        );
      }
      return [...items, { ...newItem, quantity: newItem.quantity || 1 }];
    });
  }

  updateQuantity(id: string, change: number): void {
    this.items.update(items =>
      items.map(item =>
        item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  }

  removeItem(id: string): void {
    this.items.update(items => items.filter(i => i.id !== id));
  }

  clearCart(): void {
    this.items.set([]);
  }
}
