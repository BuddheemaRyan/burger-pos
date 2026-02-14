import { CartItem, CartService } from './../../services/cart.service';
import { CurrencyPipe , CommonModule} from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProductDto, ProductService } from '../../services/product.service';



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
export class MenuComponent implements OnInit{
  private cartService = inject(CartService);
  private productService = inject(ProductService)


  menuItems : ProductDto[] =[];
  categories = ['All', 'Burger', 'Fries', 'Drinks', 'Snacks'];
  selectedCategory = 'All';

  ngOnInit(): void {
    this.loadProducts();
  }


  loadProducts(){
    this.productService.getAll().subscribe({
      next: (products) => {
        this.menuItems = products;
        console.log('Products loaded from backend', products);
      },
      error:(err)=>{
        console.error('Error loading Products:', err);
      }
    });
  }

  get filteredItems() : ProductDto[]{
    if (this.selectedCategory === 'All') return this.menuItems;
    return this.menuItems.filter(item =>
      item.category.toLowerCase().includes(this.selectedCategory.toLowerCase())
    );
  }

  addToCart(product : ProductDto) {
    this.cartService.addItem({
      id:product.id!.toString(),
      name:product.name,
      price:product.price,
      quantity:1,
      image:product.imageUrl
    });
  }

  handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'https://via.placeholder.com/150?text=No+Image';
    console.log('Image failed to load', img.src);
  }
}
