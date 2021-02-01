import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../interface/product-category';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {

  productCategories: ProductCategory[] = [
    {id: 1, categoryName: 'Beauty', imageUrl: 'assets/images/beauty.jpg', isSelected: false},
    {id: 2, categoryName: 'Baby', imageUrl: 'assets/images/baby.jpg', isSelected: false},
  ];

  selectedProducts: ProductCategory[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedProducts(products: ProductCategory[] ): void {
    this.selectedProducts = products;
    console.log(this.selectedProducts);
  }

}
