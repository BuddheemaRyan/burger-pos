import { CartItem, CartService } from './../../services/cart.service';
import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';



interface MenuItem {
  id: string;
  name: string;
  category: 'burger' | 'fries' | 'drinks' | 'snacks';
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
    // 8 Burgers
    {
      id: 'classic',
      name: 'Classic Burger',
      category: 'burger',
      price: 650,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'
    },
    {
      id: 'cheese',
      name: 'Cheese Burger',
      category: 'burger',
      price: 750,
      image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500'
    },
    {
      id: 'double',
      name: 'Double Patty Burger',
      category: 'burger',
      price: 950,
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500'
    },
    {
      id: 'bacon',
      name: 'Bacon Cheese Burger',
      category: 'burger',
      price: 890,
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500'
    },
    {
      id: 'spicy',
      name: 'Spicy Jalapeño Burger',
      category: 'burger',
      price: 820,
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500'
    },
    {
      id: 'mushroom',
      name: 'Mushroom Swiss Burger',
      category: 'burger',
      price: 880,
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500'
    },
    {
      id: 'chicken',
      name: 'Crispy Chicken Burger',
      category: 'burger',
      price: 780,
      image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500'
    },
    {
      id: 'veggie',
      name: 'Veggie Burger',
      category: 'burger',
      price: 680,
      image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500'
    },

    // 8 Fries & Sides
    {
      id: 'fries-s',
      name: 'Small Fries',
      category: 'fries',
      price: 280,
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500'
    },
    {
      id: 'fries-m',
      name: 'Medium Fries',
      category: 'fries',
      price: 380,//
      image: 'https://plus.unsplash.com/premium_photo-1683121324474-83460636b0ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFyZ2UlMjBmcmllc3xlbnwwfHwwfHx8MA%3D%3D?w=500'
    },
    {
      id: 'fries-l',
      name: 'Large Fries',
      category: 'fries',
      price: 480,
      image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500'
    },
    {
      id: 'onion-rings',
      name: 'Onion Rings',
      category: 'fries',
      price: 450,
      image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=500'
    },
    {
      id: 'mozzarella-sticks',
      name: 'Mozzarella Sticks (6pcs)',
      category: 'fries',
      price: 520,
      image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=500'
    },
    {
      id: 'nuggets',
      name: 'Chicken Nuggets (8pcs)',
      category: 'fries',
      price: 490,
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500'
    },
    {
      id: 'loaded-fries',
      name: 'Loaded Cheese Fries',
      category: 'fries',
      price: 550,
      image: 'https://images.unsplash.com/photo-1568226189293-77924f3f10c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZXNlJTIwZnJpZXN8ZW58MHx8MHx8fDA%3D?w=500'
    },
    {
      id: 'sweet-potato',
      name: 'Sweet Potato Fries',
      category: 'fries',
      price: 420,
      image: 'https://plus.unsplash.com/premium_photo-1714245923988-64da21a82a1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3dlZXQlMjBwb3RhdG8lMjBmcmllc3xlbnwwfHwwfHx8MA%3D%3D?w=500'
    },

    // 8 Snacks
    {
      id: 'hotdog',
      name: 'Classic Hotdog',
      category: 'snacks',
      price: 420,
      image: 'https://plus.unsplash.com/premium_photo-1713793236612-50c9bfedbe07?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=500'
    },
    {
      id: 'corn-dog',
      name: 'Corn Dog',
      category: 'snacks',
      price: 380,
      image: 'https://images.unsplash.com/photo-1626790680787-de5e9a07bcf2?w=500'
    },
    {
      id: 'samosa',
      name: 'Spicy Samosa (2pcs)',
      category: 'snacks',
      price: 250,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500'
    },
    {
      id: 'spring-roll',
      name: 'Veg Spring Rolls (4pcs)',
      category: 'snacks',
      price: 320,
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500'
    },
    {
      id: 'chips',
      name: 'Potato Chips (large)',
      category: 'snacks',
      price: 180,
      image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=500'
    },
    {
      id: 'nachos',
      name: 'Loaded Nachos',
      category: 'snacks',
      price: 480,
      image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500'
    },
    {
      id: 'wings',
      name: 'Buffalo Wings (6pcs)',
      category: 'snacks',
      price: 580,
      image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=500'
    },
    {
      id: 'popcorn-chicken',
      name: 'Popcorn Chicken',
      category: 'snacks',
      price: 390,
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500'
    },

    // 8 Drinks
    {
      id: 'cola-s',
      name: 'Cola (Small)',
      category: 'drinks',
      price: 220,
      image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500'
    },
    {
      id: 'cola-m',
      name: 'Cola (Medium)',
      category: 'drinks',
      price: 280,
      image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500'
    },
    {
      id: 'cola-l',
      name: 'Cola (Large)',
      category: 'drinks',
      price: 340,
      image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500'
    },
    {
      id: 'lemonade',
      name: 'Fresh Lemonade',
      category: 'drinks',
      price: 300,
      image: 'https://images.unsplash.com/photo-1665582295782-eecc2e25b74f?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=500'
    },
    {
      id: 'iced-tea',
      name: 'Iced Tea',
      category: 'drinks',
      price: 290,
      image: 'https://plus.unsplash.com/premium_photo-1664392087859-815b337c3324?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWNlZCUyMHRlYXxlbnwwfHwwfHx8MA%3D%3D?w=500'
    },
    {
      id: 'milkshake-choc',
      name: 'Chocolate Milkshake',
      category: 'drinks',
      price: 480,
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500'
    },
    {
      id: 'milkshake-straw',
      name: 'Strawberry Milkshake',
      category: 'drinks',
      price: 480,
      image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=500'
    },
    {
      id: 'orange-juice',
      name: 'Fresh Orange Juice',
      category: 'drinks',
      price: 320,
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500'
    },
  ];

  get filteredItems() {
    if (this.selectedCategory === 'All') return this.menuItems;
    return this.menuItems.filter(item =>
      item.category === this.selectedCategory.toLocaleLowerCase().replace(/ & sides/, '')
    );
  }

  addToCart(item: MenuItem) {
    const cartItem: CartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image
    };
    this.cartService.addItem(cartItem);
  }

  handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'https://via.placeholder.com/150?text=No+Image';
    console.log('Image failed to load', img.src);
  }
}
