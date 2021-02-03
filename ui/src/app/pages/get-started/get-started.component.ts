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
  allCategories: ProductCategory[] = [];
  productCategories: ProductCategory[] = [];
  totalSteps = 0;
  pageSize = 6;
  currentSelectedProducts: ProductCategory[] = [];
  allSelectectedProducts: ProductCategory[] = [];
  brands: any[] = [];
  selectedBrands: any[] = [];

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.getAllProductCategories();
  }


  getAllProductCategories(): void {
    this.api.getProductCategory().subscribe( (data: ProductCategory[]) => {
      this.allCategories = data;
      const categoryCount = this.allCategories.length;
      this.totalSteps = Math.ceil(categoryCount/this.pageSize);
      this.gotoStep(0);
      this.getAllBrands();
    });
  }

  getAllBrands(): void {
    this.api.getBrands().subscribe( (data: any[]) => {
      this.brands = data;
    });
  }

  gotoStep(step: number): void {
    this.currentStep = step;
    if ( step > this.totalSteps ) {

    } else {
      this.productCategories = [...this.paginate(this.allCategories, this.pageSize, this.currentStep )]
      this.allSelectectedProducts.push(...this.currentSelectedProducts);
      this.currentSelectedProducts = [];
    }
    console.log(this.allSelectectedProducts);
  }

  paginate(array: any[], page_size: number, page_number: number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  setSelectedProducts(products: any): void {
    this.currentSelectedProducts = [...products];
  }

  setSelectedBrands(brands: any): void {
    this.selectedBrands = [...brands];
  }

}
