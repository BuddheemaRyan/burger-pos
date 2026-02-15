import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService, ProductDto } from '../../services/product.service';
import { SideBarComponent } from "../../component/side-bar/side-bar.component";

@Component({
  selector: 'app-admin-board',
  imports: [FormsModule, CommonModule, SideBarComponent],
  templateUrl: './admin-board.component.html',
  styleUrl: './admin-board.component.css'
})
export class AdminBoardComponent implements OnInit {
  private productService = inject(ProductService);

  products = signal<ProductDto[]>([]);
  isLoading = signal(true);
  error = signal<string | null>(null);

  // Form state
  showModal = signal(false);
  isEditMode = signal(false);
  currentProduct = signal<ProductDto>({
    id: null,
    name: '',
    category: '',
    price: 0,
    imageUrl: ''
  });

  categories = ['burger', 'fries', 'snacks', 'drinks'];

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.isLoading.set(true);
    this.error.set(null);

    this.productService.getAll().subscribe({
      next: (data) => {
        this.products.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load products. Please try again.');
        this.isLoading.set(false);
        console.error('Load products error:', err);
      }
    });
  }

  openAddModal() {
    this.isEditMode.set(false);
    this.currentProduct.set({
      id: null,
      name: '',
      category: '',
      price: 0,
      imageUrl: ''
    });
    this.showModal.set(true);
  }

  openEditModal(product: ProductDto) {
    this.isEditMode.set(true);
    this.currentProduct.set({ ...product });
    this.showModal.set(true);
  }

  saveProduct() {
    const prod = this.currentProduct();

    // Validation
    if (!prod.name || !prod.category || prod.price <= 0) {
      alert('Please fill all required fields correctly');
      return;
    }

    if (this.isEditMode() && prod.id) {
      // Update existing product
      this.productService.update(prod.id, prod).subscribe({
        next: (updated) => {
          alert('Product updated successfully!');
          this.closeModal();
          this.loadProducts(); // Reload from backend
        },
        error: (err) => {
          console.error('Update error:', err);
          alert('Failed to update product. Please try again.');
        }
      });
    } else {
      // Create new product
      this.productService.create(prod).subscribe({
        next: (newProd) => {
          alert('Product added successfully!');
          this.closeModal();
          this.loadProducts(); // Reload from backend
        },
        error: (err) => {
          console.error('Create error:', err);
          alert('Failed to create product. Please try again.');
        }
      });
    }
  }

  deleteProduct(id: number) {
    if (!confirm('Are you sure you want to delete this product?')) {
      return;
    }

    this.productService.delete(id).subscribe({
      next: () => {
        alert('Product deleted successfully!');
        this.loadProducts(); // Reload from backend
      },
      error: (err) => {
        console.error('Delete error:', err);
        alert('Failed to delete product. Please try again.');
      }
    });
  }

  closeModal() {
    this.showModal.set(false);
  }
}
