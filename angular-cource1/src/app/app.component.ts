import {Course} from './model/course';
import {COURSES} from 'src/db-data';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {CourseCardComponent} from "./course-card/course-card.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  onCourceViewed: boolean = false;
  courses = COURSES;
  value: number = 1;

  @ViewChild('cardRef1')
  card !: CourseCardComponent;

  @ViewChild('cardRef1', {read: ElementRef})
  card1 !: ElementRef

  @ViewChildren(CourseCardComponent)
  allCard !: QueryList<CourseCardComponent>

  @ViewChild('container')
  container !: ElementRef;

  startDate = new Date(2021, 7, 4);

  ngOnInit() {
  }

  OnCourseSelected(course: Course) {
    console.log('Course is ', course);
    // console.log('View child Card is ' , this.card1);
  }

  OnCourseViewed() {
    this.onCourceViewed = true;
    console.log('app -> cource viewed');
  }

  constructor(private renderer: Renderer2) {
  }

  /*As the name suggest it will be called after the view is constucted. and this is a life cycle
    method. And if we have any binded parameter it will be like view construction
      process itself updating the view and it will be confusing for angular .*/
  ngAfterViewInit(): void {
    this.allCard.changes.subscribe(card => {
      console.log('new card is :', card)
    })
    // TO make the backgroung color red
    // this.renderer.setStyle(this.container.nativeElement, 'background', 'red');
  }

  onEditCourse() {
    this.courses.push(
      {
        id: 11,
        description: "test",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
        longDescription: "Test course for observables",
        lessonsCount: 11,
      }
    );
  }


}
