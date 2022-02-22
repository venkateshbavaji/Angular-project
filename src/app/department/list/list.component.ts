
import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from 'src/app/models/department.model';
import { DepartmentService } from '../department.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lstDepartment: DepartmentModel[]=[];
 title:string = 'ADD a department';
  departmentModel = new DepartmentModel();
  
 constructor(private departmentservice: DepartmentService,private Toastrservice:ToastrService){ }
    ngOnInit(): void {
 this.loadData();
  
    }   
     loadData() {
  this.departmentservice.getall().subscribe((response: any) => {
          console.log(response);  
    this.lstDepartment = response.map((data:any) => {
    return {
      id: data.payload.doc.id,
     ...data.payload.doc.data() as DepartmentModel
   }
   });
    console.log(this.lstDepartment);
  })
}
    addDepartment() {
      this.title ='Add department';
      this.departmentModel = new DepartmentModel();
    }
    editDepartment(departmentModel : DepartmentModel){
      this.title = 'Edit a Department';
      this.departmentModel = new DepartmentModel;
    }
    viewDepartment(department:DepartmentModel){
      this.title = 'view a Department';
      this.departmentModel = new DepartmentModel();
    }
    deleteDepartment(id:string){
  if (confirm("are you sure you  want to delete ?")){
   this .departmentservice.delete(id).then((response:any) => {
    console.log(response);
    this.Toastrservice.success('Department deleted successfully...!');
  })
  .catch((error: Response) => {
  console.log(error);
 this.Toastrservice.error(error.statusText);
    })
    this.loadData();
  }
}
   saveDepartment(){
      if(this.departmentModel.id){
  //update
  
  this.departmentservice.update(this.departmentModel.id, this.departmentModel).then((response :any) => {
    console.log(response);
     this.Toastrservice.success('updated successfully....!');
    })
    .catch((error: Response) => {
      console.log(error);
      this.Toastrservice.error(error.statusText);
    })
  }
    else {
     this.departmentservice.create(this.departmentModel).then((response:any) => {
       console.log(response);
     this.Toastrservice.success('created successfully...');
    })
    .catch((error: Response)=>{
      console.log(error);
      this.Toastrservice.error(error.statusText);
  })
}
this.departmentModel = new DepartmentModel();
this.loadData();
    }

  }
  


