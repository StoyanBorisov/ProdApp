import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-prodinput',
  templateUrl: './prodinput.component.html',
  styleUrls: ['./prodinput.component.css']
})
export class ProdinputComponent implements OnInit {
  @Output() newProduct = new EventEmitter ()
  @Input() productData
  
  constructor() {
   }

   editDatafunc(e) {
    console.log("-------------------------------")
    console.log(e)
    console.log(this.productData)
  }

  ngOnInit() {
  }

}
