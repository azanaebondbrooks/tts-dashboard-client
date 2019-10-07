import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { SupplierPageComponent } from './pages/supplier-page/supplier-page.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AddProductComponent } from './forms/add-product/add-product.component';
import { AddCategoryComponent } from './forms/add-category/add-category.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    CategoryPageComponent,
    SupplierPageComponent,
    ProductPageComponent,
    AddProductComponent,
    AddCategoryComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
