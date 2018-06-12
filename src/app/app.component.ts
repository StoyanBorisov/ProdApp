import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  selectedProduct = {}
  products = [
    { id: 11, name: 'Ябълки',     price:  1.11},
    { id: 12, name: 'Круши' ,     price:  1.12},
    { id: 13, name: 'Сливи' ,     price:  1.13},
    { id: 14, name: 'Компютри' ,  price:  144.8},
    { id: 15, name: 'Мишки' ,     price:  151.5},
    { id: 16, name: 'Проектори' , price:  161.9}
  ];
  nextid=17
  onSelect(p){
    console.log(p);
    this.selectedProduct = p;
  }
  AddNewProduct(e){
    console.log(e);
    e.id = this.nextid++;
    this.products.push(e);
  }
}

