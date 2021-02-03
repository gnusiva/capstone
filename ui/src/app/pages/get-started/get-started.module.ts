import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetStartedRoutingModule } from './get-started-routing.module';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { Step5Component } from './step5/step5.component';
import { Step6Component } from './step6/step6.component';
import { Step7Component } from './step7/step7.component';
import { Step8Component } from './step8/step8.component';
import { Step9Component } from './step9/step9.component';
import { StepIndicatorComponent } from 'src/app/components/step-indicator/step-indicator.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProductCategoryListComponent } from './product-category-list/product-category-list.component';
import { ProductCategoryCardComponent } from './product-category-list/product-category-card/product-category-card.component';
import { GetStartedComponent } from './get-started.component';


@NgModule({
  declarations: [
    GetStartedComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component,
    Step7Component,
    Step8Component,
    Step9Component,
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
