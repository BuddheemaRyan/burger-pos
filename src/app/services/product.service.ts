import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ProductDto {
  image: any;
  id: number | null;
  name: string;
  category: string;
  price: number;
  imageUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/product';

  constructor(private http: HttpClient) { }

  getAll(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiUrl}/all`);
  }

  getById(id: number): Observable<ProductDto> {
    return this.http.get<ProductDto>(`${this.apiUrl}/get/${id}`);
  }

  create(product: ProductDto): Observable<ProductDto> {
    return this.http.post<ProductDto>(`${this.apiUrl}/add`, product);
  }

  update(id: number, product: ProductDto): Observable<ProductDto> {
    return this.http.put<ProductDto>(`${this.apiUrl}/${id}`, product);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

