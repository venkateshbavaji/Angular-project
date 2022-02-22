
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { userModel } from './user.model';
import { userservice } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  
})
export class UserComponent implements OnInit {
title:string='create auser';
userModel = new userModel();
lstuser: userModel[]=[];
p:number=1;
alertmessage:string='';
APIBaseUrl:string=('https://jsonplaceholder.typicode.com/users');
  constructor(private userservice:userservice, private toastrservice:ToastrService) {

   }

  ngOnInit(): void {
   this. loadData();
    
  }
  loadData(){
    this.userservice.getall().subscribe(response=>{
      this.lstuser= response as userModel[];
    },
    (error: Response)=>{
      console.log(error);
      if(error.status===404){
        //expectederror
       // alert('resource not found');
       this.toastrservice.error('resourse not found...!');
      }
    }
    )
      }
    
  
  adduser(){
    this.title='create a user';
    this.userModel=  new userModel();
}
edituser(user:userModel){
  this.title='edit a user';
this.userModel=user;
}
viewuser(user:userModel){
  this.title='view a user';
  this.userModel=user;
}
deleteuser(id:number){
  if (confirm("are you sure to delete ?")){
  let url = this.APIBaseUrl + '/' + id;
  this .userservice.delete(id).subscribe(response=>{
    console.log(response);
    this.toastrservice.success('user deleted successfully...!')
  },
  (error:Response)=>{
    if (error.status===404){
     // alert('response not found....!');
     this.toastrservice.error('resourse not found...!');
    }
    else{
     // alert('unexpected error occured....!');
     this.toastrservice.error('unexpected error ocured...!');
    }
  }
  );
  this.loadData();
  }
    }
    saveuserDetail(){
      if(this.userModel.id){
  //update
  let url= this.APIBaseUrl +'/' + this.userModel.id;
  this.userservice.update(this.userModel.id, this.userModel).subscribe(response =>{
    console.log(response);
  },
  (error:Response)=>{
    if (error.status===404){
     // alert('resource not found.....!');
     this.toastrservice.error('resourse not found...!');
    }
    else if (error.status===400){
     // alert('bad request....!');
     this.toastrservice.error('bad request...!');
    }
    else{
      //alert('unexpected error occured...!');
      this.toastrservice.error('unexpected error occured...!');
    }
  }
  )
 // this.alertmessage='user updated successfully...!'
 this. toastrservice.success('user updated successfully...!')

      }
      else {
        //create
        this.userservice.create(this.userModel).subscribe(Response =>{
          console.log(Response);
        },
        (error:Response)=>{
          if(error.status===404){
           // alert('resource not found...!');
           this.toastrservice.error('resourse not found...!');
          }
          else if(error.status===400){
            //alert('bad request.....!');
            this.toastrservice.error('bad request...!');
          }
          else{
           // alert('unexpected error occured....!');
           this.toastrservice.error('unexpected error occured..!');
          }
        }
        );
       // this.alertmessage='user created successfully...!'
       this.toastrservice.success('user created successfully...!');
      }
      this.loadData();
      this.userModel= new userModel();
    }
}
