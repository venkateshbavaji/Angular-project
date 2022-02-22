import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DepartmentModel } from 'src/app/models/department.model';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
departmentModel$:Observable<DepartmentModel>;

  constructor(private departmentservice:DepartmentService, private activatedRoute:ActivatedRoute) { 

  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.departmentModel$ = this.departmentservice.getById(id);
  }
 
}
