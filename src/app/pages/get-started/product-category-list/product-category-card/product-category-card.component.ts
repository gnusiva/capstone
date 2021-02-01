import { Component, Input, OnInit } from '@angular/core';
import { ProductCategory } from '../../interface/product-category';

@Component({
  selector: 'app-product-category-card',
  templateUrl: './product-category-card.component.html',
  styleUrls: ['./product-category-card.component.scss']
})
export class ProductCategoryCardComponent implements OnInit {

  @Input() product: ProductCategory;

  constructor() { }

  ngOnInit(): void {
  }

}
