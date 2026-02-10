import { CartItem, CartService } from './../../services/cart.service';
import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';


interface MenuItem {
  id: string;
  name: string;
  category: 'burger' | 'fries' | 'drink' | 'snack';
  price: number;
  image?: string;
}

@Component({
  selector: 'app-menu',
  imports: [CurrencyPipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  private cartService = inject(CartService);

  categories = ['All', 'Burger', 'Fries', 'Drinks', 'Snacks'];

  selectedCategory = 'All';

  menuItems: MenuItem[] = [
    { id: 'classic', name: 'Classic Burger', category: 'burger', price: 650, image: 'https://i.pinimg.com/736x/3f/ca/f9/3fcaf9fc08c38a0f16fee711b70d10c6.jpg' },
    { id: 'cheese', name: 'Cheese Burger', category: 'burger', price: 750, image: 'https://i.pinimg.com/736x/8b/36/9f/8b369fefca44952ef36cc09f830c00e7.jpg' },
    { id: 'double', name: 'Double Patty Burger', category: 'burger', price: 950, image: 'https://i.pinimg.com/736x/73/48/31/734831fa39342d6374f49748f6fd7147.jpg' },
    { id: 'bacon', name: 'Bacon Cheese Burger', category: 'burger', price: 890, image: 'https://i.pinimg.com/736x/99/13/40/991340169c172c5f42d3bf56fd104f97.jpg' },
    { id: 'spicy', name: 'Spicy Jalapeño Burger', category: 'burger', price: 820, image: 'https://i.pinimg.com/736x/bb/9c/7f/bb9c7f91eb4b0e547da12740f3d47851.jpg' },
    { id: 'mushroom', name: 'Mushroom Swiss Burger', category: 'burger', price: 880, image: 'https://i.pinimg.com/736x/c7/a3/5a/c7a35ab1b36adb4d1acd2b8702d61f90.jpg' },
    { id: 'chicken', name: 'Crispy Chicken Burger', category: 'burger', price: 780, image: 'https://i.pinimg.com/736x/e8/71/17/e87117318770c5416aefdbeed7b32d33.jpg' },
    { id: 'veggie', name: 'Veggie Burger', category: 'burger', price: 680, image: 'https://i.pinimg.com/1200x/27/ab/5e/27ab5edd0885b823023a2b5ba47a1f04.jpg' },

    { id: 'fries-s', name: 'Small Fries', category: 'fries', price: 280, image: 'https://i.pinimg.com/736x/1c/8e/0b/1c8e0b9a3d2f5c7a4c9e5f1a2b6d8c9.jpg' },
    { id: 'fries-m', name: 'Medium Fries', category: 'fries', price: 380, image: 'https://i.pinimg.com/736x/1c/8e/0b/1c8e0b9a3d2f5c7a4c9e5f1a2b6d8c9.jpg' },
    { id: 'fries-l', name: 'Large Fries', category: 'fries', price: 480, image: 'https://i.pinimg.com/736x/1c/8e/0b/1c8e0b9a3d2f5c7a4c9e5f1a2b6d8c9.jpg' },
    { id: 'onion-rings', name: 'Onion Rings', category: 'fries', price: 450, image: 'https://i.pinimg.com/736x/1c/8e/0b/1c8e0b9a3d2f5c7a4c9e5f1a2b6d8c9.jpg' },
    { id: 'mozzarella-sticks', name: 'Mozzarella Sticks (6pcs)', category: 'fries', price: 520, image: 'https://i.pinimg.com/736x/1c/8e/0b/1c8e0b9a3d2f5c7a4c9e5f1a2b6d8c9.jpg' },
    { id: 'nuggets', name: 'Chicken Nuggets (8pcs)', category: 'fries', price: 490, image: 'https://i.pinimg.com/736x/1c/8e/0b/1c8e0b9a3d2f5c7a4c9e5f1a2b6d8c9.jpg' },

    { id: 'hotdog', name: 'Classic Hotdog', category: 'snack', price: 420, image: 'https://i.pinimg.com/736x/1c/8e/0b/1c8e0b9a3d2f5c7a4c9e5f1a2b6d8c9.jpg' },
    { id: 'corn-dog', name: 'Corn Dog', category: 'snack', price: 380, image: 'https://i.pinimg.com/736x/1c/8e/0b/1c8e0b9a3d2f5c7a4c9e5f1a2b6d8c9.jpg' },
    { id: 'samosa', name: 'Spicy Samosa (2pcs)', category: 'snack', price: 250, image: 'https://i.pinimg.com/736x/1c/8e/0b/1c8e0b9a3d2f5c7a4c9e5f1a2b6d8c9.jpg' },
    { id: 'spring-roll', name: 'Veg Spring Rolls (4pcs)', category: 'snack', price: 320, image: 'https://i.pinimg.com/736x/1c/8e/0b/1c8e0b9a3d2f5c7a4c9e5f1a2b6d8c9.jpg' },
    { id: 'chips', name: 'Potato Chips (large)', category: 'snack', price: 180, image: 'https://i.pinimg.com/736x/1c/8e/0b/1c8e0b9a3d2f5c7a4c9e5f1a2b6d8c9.jpg' },

    { id: 'cola-s', name: 'Cola (Small)', category: 'drink', price: 220, image: 'https://i.pinimg.com/736x/1c/8e/0b/1c8e0b9a3d2f5c7a4c9e5f1a2b6d8c9.jpg' },
    { id: 'cola-m', name: 'Cola (Medium)', category: 'drink', price: 280, image: 'https://i.pinimg.com/736x/1c/8e/0b/1c8e0b9a3d2f5c7a4c9e5f1a2b6d8c9.jpg' },
    { id: 'cola-l', name: 'Cola (Large)', category: 'drink', price: 340, image: 'https://i.pinimg.com/736x/1c/8e/0b/1c8e0b9a3d2f5c7a4c9e5f1a2b6d8c9.jpg' },
    { id: 'lemonade', name: 'Fresh Lemonade', category: 'drink', price: 300, image: 'https://i.pinimg.com/736x/1c/8e/0b/1c8e0b9a3d2f5c7a4c9e5f1a2b6d8c9.jpg' },
    { id: 'iced-tea', name: 'Iced Tea', category: 'drink', price: 290, image: 'https://i.pinimg.com/736x/1c/8e/0b/1c8e0b9a3d2f5c7a4c9e5f1a2b6d8c9.jpg' },
    { id: 'milkshake', name: 'Chocolate Milkshake', category: 'drink', price: 480, image: 'https://i.pinimg.com/736x/1c/8e/0b/1c8e0b9a3d2f5c7a4c9e5f1a2b6d8c9.jpg' },

  ];

  get filteredItems() {
    if (this.selectedCategory === 'All') return this.menuItems;
    return this.menuItems.filter(item =>
      item.category === this.selectedCategory.toLocaleLowerCase().replace(/ & sides/, '')
    );
  }

  addToCart(item: MenuItem){
    const cartItem: CartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image
    };
    this.cartService.addItem(cartItem);
  }

}
