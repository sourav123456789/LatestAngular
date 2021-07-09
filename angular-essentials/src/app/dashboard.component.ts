import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
     <p>This is the DashBoardComponent</p>
      <p [textContent] = "loadState"></p>
  `
})

export class DashBoardComponent implements OnInit {
  loadState = 'Loading'
  constructor() { }

  ngOnInit() { }
}
