import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartItem, CartService } from './../../services/cart.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  public cartService = inject(CartService);

  cartItems = this.cartService.cartItems;
  itemCount = this.cartService.itemCount;
  subtotal = this.cartService.subtotal;
  tax = this.cartService.tax;
  total = this.cartService.total;

  updateQuantity(item: CartItem, delta: number): void {
    this.cartService.updateQuantity(item.id, delta);
  }

  removeItem(item: CartItem): void {
    this.cartService.removeItem(item.id);
  }

  placeOrder(): void {
    if (this.cartItems().length === 0) return;
    console.log('Order Placed!', this.cartItems(), 'Total:', this.total);
    alert('Order Placed! Total:' + this.total() + 'LKR');
    this.cartService.clearCart();
  }
}
