import {Component, OnInit} from  "@angular/core";
import { coursesservice } from "../courses.service";

@Component({
    selector: 'courses',
    templateUrl:'./coursess.component.html',
    styleUrls:['./coursess.component.css'],
})
export class coursescomponent implements OnInit {
    title: string = 'list of courses';
    courses:string[] = [ 'angular','dotnet','java','python'];
    constructor(private courseservice: coursesservice) {
        
          
    }
    ngOnInit(): void {
        this.courses = this.courseservice.getAll();

    }


 
    getTitle(){
        return this.title;
    }
    
    

}