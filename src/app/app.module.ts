import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SamplerooComponent } from './components/footer/sampleroo/sampleroo.component';
import { SubscribeComponent } from './components/footer/subscribe/subscribe.component';
import { FollowusComponent } from './components/footer/followus/followus.component';
import { ButtonComponent } from './components/button/button.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SamplerooComponent,
    SubscribeComponent,
    FollowusComponent,
    ButtonComponent,
    GetStartedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
