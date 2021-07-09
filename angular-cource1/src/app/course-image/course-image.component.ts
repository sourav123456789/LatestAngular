import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-image',
  templateUrl: './course-image.component.html',
  styleUrls: ['./course-image.component.css']
})
export class CourseImageComponent implements OnInit {

  @Input() iconUrl !: string;

  constructor() { }

  ngOnInit(): void {
  }

}
