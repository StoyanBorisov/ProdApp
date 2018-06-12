import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProdinputComponent } from './prodinput/prodinput.component';
// import { ProductService } from './shared/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProdinputComponent
  ],
  imports: [
    BrowserModule
  ],
 // providers: [ProductService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
