import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetStartedRoutingModule } from './get-started-routing.module';
import { StepIndicatorComponent } from 'src/app/components/step-indicator/step-indicator.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProductCategoryListComponent } from './product-category-list/product-category-list.component';
import { ProductCategoryCardComponent } from './product-category-list/product-category-card/product-category-card.component';
import { GetStartedComponent } from './get-started.component';


@NgModule({
  declarations: [
    GetStartedComponent,
    ProductCategoryListComponent,
    ProductCategoryCardComponent,
  ],
  imports: [
    CommonModule,
    GetStartedRoutingModule,
    ComponentsModule
  ]
})
export class GetStartedModule { }
