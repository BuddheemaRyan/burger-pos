import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ProductDto{
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

  getAll(): Observable<ProductDto[]>{
    return this.http.get<ProductDto[]>(this.apiUrl);
  }

  create(product: ProductDto): Observable<ProductDto>{
    return this.http.post<ProductDto>(this.apiUrl,product);
  }
}
