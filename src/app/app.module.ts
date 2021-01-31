import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SamplerooComponent } from './components/footer/sampleroo/sampleroo.component';
import { SubscribeComponent } from './components/footer/subscribe/subscribe.component';
import { FollowusComponent } from './components/footer/followus/followus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SamplerooComponent,
    SubscribeComponent,
    FollowusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
