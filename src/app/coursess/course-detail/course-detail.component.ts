import { Component, OnInit } from '@angular/core';
import { courseModel } from '../course.model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent  {
courseModel = new  courseModel( 'complete angular course',
'the complete course by ramanachari basics to higher level with in the span of three months . it is not money oriented program it is knowledge sharing program', 
100000,'Ramesh babu','3months',4.05,new Date(2022,1,23));
}
//  ngOnInit(): void {

//     this.courseModel.facultyname='ramana ';
//     this.courseModel.duration='3 months';
//     this.courseModel.rating=4.98,
//     this.courseModel.rating=20000,

//     this.courseModel.releasedate= new Date(2022,1,23);
    
//   }


// }





