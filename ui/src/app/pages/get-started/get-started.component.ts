import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ProductCategory } from './interface/product-category';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {

  currentStep = 0;
  productCategories: ProductCategory[] = [];
  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.api.getProductCategory().subscribe( (data: ProductCategory[]) => {
      this.productCategories = data;
    });
  }

  setSelectedProducts(products: ProductCategory): void {

  }

}
