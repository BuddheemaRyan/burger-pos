import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartItem, CartService } from './../../services/cart.service';
import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface OrderItemRequest {
  productId: number;
  quantity: number;
}

interface OrderRequest {
  items: OrderItemRequest[];
}

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  private apiUrl = 'http://localhost:8080/order'
  private cartService = inject(CartService);
  private http = inject(HttpClient);

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

  placeOrder() {
    if (this.cartItems.length === 0) {
      alert('Cart is empty');
      return;
    }

    const request: OrderRequest = {
      items: this.cartItems().map(item => ({
        productId: Number(item.id),
        quantity: item.quantity
      }))
    };

    this.http.post(this.apiUrl, request).subscribe({
      next: (response: any) => {
        console.log('Order Created', response);
        alert(`Order placed succesfully! OrderID: ${response.id}`);
        this.cartService.clearCart();
      },

      error: (err) => {
        console.error('Place order failed:', err);
        alert('Failed to place order. check console for details')
      }
    })
  }

  clearCart(): void {
    this.cartService.clearCart();
  }


}
