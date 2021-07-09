import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rootItem = ["Apple" , "Egg" , "Banana"]
  title = 'directive-started';

  OnItemAdded(event : string) {
    this.rootItem.push(event);
    console.log(event);
  }
}
