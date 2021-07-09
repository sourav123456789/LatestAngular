import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild, ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output, QueryList, TemplateRef,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from "../course-image/course-image.component";

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Output() courseSelected = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent)
  image !: QueryList<CourseImageComponent>;

  @Input()
  dummyImage !: TemplateRef<any>;

  constructor() {
  }

  // @ViewChild()
  // card !: CourseCardComponent;

  @Input() course!: Course;

  @Input() cardIndex!: number;

  ngOnInit(): void {
  }

  OnCourseViewed() {
    console.log('EDIT IS CALLED');
    this.courseSelected.emit(this.course);
    console.log('Emitted course was', this.course)
  }

  cardClasses(): any {
    if (this.course.category === 'BEGINNER')
      return 'beginner';
  }

  cardStyles(): any {
    return {
      'text-decoration': 'underline'
    };
  }

  ngAfterViewInit(): void {
    // console.log('image is ', this.image)
  }

  ngAfterContentInit(): void {
    console.log('image is ', this.image);
  }

}
