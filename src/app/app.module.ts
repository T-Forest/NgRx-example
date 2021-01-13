import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppStoreModule } from './store/app-store.module';
import { TodoModule } from './todo';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppStoreModule,   //必須
    TodoModule,       //Lazy Loading可
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
