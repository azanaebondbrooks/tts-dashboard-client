import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { SupplierPageComponent } from './pages/supplier-page/supplier-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AddProductComponent } from './forms/add-product/add-product.component';
import { AddCategoryComponent } from './forms/add-category/add-category.component';



const routes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'products', component: ProductPageComponent },
  { path: 'categories', component: CategoryPageComponent },
  { path: 'suppliers', component: SupplierPageComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'add-category', component: AddCategoryComponent },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
