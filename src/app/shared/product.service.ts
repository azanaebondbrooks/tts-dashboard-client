import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private api: string;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.api = 'http://tts-dashboard-server.herokuapp.com/products';
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }

  public getProductById(id: number): Observable<Product> {
    const url = `${this.api}/${id}`;
    return this.http.get<Product>(url)
  }
  public createProduct(product: Product) {
    return this.http.post<Product>(this.api, product);
  }

  public updateProductById(product: Product): Observable<any> {
    return this.http.put(this.api, product, this.httpOptions);
  }

  public deleteProductById(product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.api}/${id}`;
    return this.http.delete<Product>(url, this.httpOptions)
  }

}
