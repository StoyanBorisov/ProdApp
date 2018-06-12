import { Component, OnInit, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-prodinput',
  templateUrl: './prodinput.component.html',
  styleUrls: ['./prodinput.component.css']
})
export class ProdinputComponent implements OnInit {
  @Output() newProduct = new EventEmitter ()
  constructor() { }

  ngOnInit() {
  }

}
