import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { Supplier } from '../models/supplier';


@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private api: string;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.api = 'http://tts-dashboard-server.herokuapp.com/suppliers';
  }

  public getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.api);
  }

  public getSupplierById(id: number): Observable<Supplier> {
    const url = `${this.api}/${id}`;
    return this.http.get<Supplier>(url)
  }
  public createSupplier(supplier: Supplier) {
    return this.http.post<Supplier>(this.api, supplier);
  }

  public updateSupplierById(supplier: Supplier): Observable<any> {
    return this.http.put(this.api, supplier, this.httpOptions);
  }

  public deleteSupplierById(supplier: Supplier | number): Observable<Supplier> {
    const id = typeof supplier === 'number' ? supplier : supplier.id;
    const url = `${this.api}/${id}`;
    return this.http.delete<Supplier>(url, this.httpOptions)
  }
}
