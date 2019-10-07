import { Category } from './category';
import { Supplier } from './supplier';

export interface Product {
  id:number;
  productName:string;
  category:Category;
  fullPrice:number;
  salePrice:number;
  availability:boolean;
  supplier:Supplier;
}
