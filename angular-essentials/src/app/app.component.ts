import { Component } from '@angular/core';
import { random } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name !: string ;
  number !: number;
   data = {
       title : 'angular-essentials'
   }

  onNameChanged(newName: string){
    this.name = newName;
    this.number = random(1 , 10);
    console.log(this.number)
  }
}
