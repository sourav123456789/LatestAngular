import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  template: ` <!-- <input type="text" [(ngModel)]="name"/> -->
    <input type="text" (input)="onValueChange($event)" [value]="name" />
    <p>Hello user component {{ name }}</p>
    <p>Hello user component {{ location }}</p>
    <app-user-detail></app-user-detail>
    `,
})
export class UserComponent implements OnInit {
  @Input() name!: string;
  @Input() location!: string;
  @Output() nameChange = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  onValueChange(event: any) {
    /* this.name = event.target.value; */
    this.nameChange.emit(event.target.value);
  }
}
