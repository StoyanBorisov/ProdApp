import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products:any[]
  getProducts(){ 
    return this.products;
  }
  addProduct(product){
    console.log("add "+product)
    this.products.push(product)
  }
  delProduct(e){
    this.products = this.products.filter (obj => obj != e)
  }
  setProduct(){}

  constructor() {
    this.products = [
      { id: 11, name: 'Ябълки',     price:  1.11},
      { id: 12, name: 'Круши' ,     price:  1.12},
      { id: 13, name: 'Сливи' ,     price:  1.13},
      { id: 14, name: 'Компютри' ,  price:  144.8},
      { id: 15, name: 'Мишки' ,     price:  151.5},
      { id: 16, name: 'Проектори' , price:  161.9}
    ];
   }
}
