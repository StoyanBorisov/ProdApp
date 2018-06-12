import { Component } from '@angular/core';
import { ProductService } from "../app/shared/product.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  selectedProduct = {}

  //serviceHandler = new ProductService();

  constructor(private serviceHandler: ProductService) { }

  nextid = 100

  onSelect(p) {
    console.log(p);
    this.selectedProduct = p;
  }

  AddNewProduct(e) {
    console.log("add -> "+e);
    e.id = this.nextid++;

    this.serviceHandler.addProduct(e)
  }

  deleteSelected() {
    if (this.selectedProduct.id == undefined)
      console.log("not selected")
    else
      console.log(this.selectedProduct.id);

    var index = this.serviceHandler.getProducts().indexOf(this.selectedProduct);
    console.log("found in " + index);
    
    this.serviceHandler.delProduct(this.selectedProduct)
    this.selectedProduct = {}
  }

  editSelected() {
    console.log("4 edit -> "+this.selectedProduct)
  }

  ngOnInit() {
  }
}

