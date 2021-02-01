import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductCategory } from '../interface/product-category';

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.scss']
})
export class ProductCategoryListComponent implements OnInit {

  @Input() list: ProductCategory[] = [];

  @Output() selectedProducts = new EventEmitter<ProductCategory[]>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(product: ProductCategory): void {
    product.isSelected = !product.isSelected;
    const selectedArr: ProductCategory[] = [];
    this.list.forEach( item => {
      if ( item.isSelected ) {
        selectedArr.push(item);
      }
    });
    this.selectedProducts.emit(selectedArr);
  }

}
