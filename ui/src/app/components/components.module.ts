import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { FollowusComponent } from './footer/followus/followus.component';
import { FooterComponent } from './footer/footer.component';
import { SamplerooComponent } from './footer/sampleroo/sampleroo.component';
import { SubscribeComponent } from './footer/subscribe/subscribe.component';
import { HeaderComponent } from './header/header.component';
import { StepIndicatorComponent } from './step-indicator/step-indicator.component';
import { RouterModule } from '@angular/router';

const components = [
    HeaderComponent,
    FooterComponent,
    SamplerooComponent,
    SubscribeComponent,
    FollowusComponent,
    ButtonComponent,
    StepIndicatorComponent
];


@NgModule({
  declarations: [
    ...components,
  ],
  exports: [
    ...components
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
