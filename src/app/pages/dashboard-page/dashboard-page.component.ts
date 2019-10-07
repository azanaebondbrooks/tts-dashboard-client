import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/shared/product.service';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/shared/category.service';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/shared/supplier.service';


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  products: Product[];
  categories:Category[];
  suppliers:Supplier[];
  constructor(private productService: ProductService, private categoryService:CategoryService , private supplierService:SupplierService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data =>{
      this.products = data;
    });

    this.categoryService.getCategories().subscribe(data =>{
      this.categories = data;
    });

    this.supplierService.getSuppliers().subscribe(data =>{
      this.suppliers = data;
    });
  }
}
