import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private api: string;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.api = 'http://tts-dashboard-server.herokuapp.com/categories';
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.api);
  }

  public getCategoryById(id: number): Observable<Category> {
    const url = `${this.api}/${id}`;
    return this.http.get<Category>(url)
  }
  public createCategory(category: Category) {
    return this.http.post<Category>(this.api, category);
  }

  public updateCategoryById(category: Category): Observable<any> {
    return this.http.put(this.api, category, this.httpOptions);
  }

  public deleteCategoryById(category: Category | number): Observable<Category> {
    const id = typeof category === 'number' ? category : category.id;
    const url = `${this.api}/${id}`;
    return this.http.delete<Category>(url, this.httpOptions)
  }
}
