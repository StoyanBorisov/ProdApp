import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';
import { ProductService } from "../app/shared/product.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @Output() editData = new EventEmitter ()
  selectedProduct = { id: undefined, name: undefined,     price:  undefined }

  //serviceHandler = new ProductService();

  constructor(private serviceHandler: ProductService) { }

  nextid = 100

  onSelect(p) {
    console.log(p);
    this.selectedProduct = p;

    this.editData.emit(p)
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
    this.selectedProduct = { id: undefined, name: undefined,     price:  undefined }
  }

  editSelected() {
    console.log(" ---------------------------------- ")
    console.log("4 edit -> "+this.selectedProduct)
  }

  ngOnInit() {
  }
}

