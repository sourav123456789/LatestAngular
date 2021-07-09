import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {

  @Input() items !: string[]
  @Output() itemAdded = new EventEmitter<string>();
  newItem : string = '';

  constructor() { }

  ngOnInit(): void {

  }

  onItemAdded(item : string){
    this.itemAdded.emit(item);
  }

}
