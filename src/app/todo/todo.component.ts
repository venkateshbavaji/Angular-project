import { ViewportScroller } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { todoModel } from './todo.model';
import { todoservice } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  
})
export class TodoComponent implements OnInit {
lsttodo: todoModel[]=[];
p:number=1;
title:string='create a todos';
todoModel = new todoModel();
APIBaseUrl:string=('https://jsonplaceholder.typicode.com/todos');
alertmessage:string='';

  constructor(private todoservice:todoservice ,private toastrservice:ToastrService) { 

  }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.todoservice.getall().subscribe(response=>{
    this.lsttodo = response as todoModel[];
    },
    (error: Response)=>{
      console.log(error);
      if(error.status===404){
        //expectederror
        alert('resource not found');
      }
    }
    )
      }

  addtodo() {
    this.title ='create a todo';
    this.todoModel = new todoModel();
    this.alertmessage='';
  }
  edittodo(todo :todoModel){
    this.title = 'Edit a todo';
    this.todoModel = todo;
    this.alertmessage='';
  }
  viewtodo(todo:todoModel){
    this.title = 'view a todo';
    this.todoModel= todo;
    this.alertmessage='';
  }
  deletetodo(id:number){
if (confirm("are you sure to delete ?")){
let url = this.APIBaseUrl + '/' + id;
this .todoservice.delete(id).subscribe(response=>{
  console.log(response);
  this.toastrservice.success(' todo deleted successfully...!');
},
(error:Response)=>{
  if (error.status===404){
   // alert('response not found....!');
   this.toastrservice.error('resourse not foound...!');
  }
  else{
   // alert('unexpected error occured....!');
   this.toastrservice.error('unexpected error occured...!')
  }
}
);
this.loadData();
}
  }
  savePostDetail(){
    if(this.todoModel.id){
//update
let url= this.APIBaseUrl +'/' + this.todoModel.id;
this.todoservice.update(this.todoModel.id, this.todoModel).subscribe(response =>{
  console.log(response);
},
(error:Response)=>{
  if (error.status===404){
    //alert('resource not found.....!');
    this.toastrservice.error('resourse not found...!');
  }
 
  else if (error.status===400){
   // alert('bad request....!');
   this.toastrservice.error('bad request...!');
  }
  else{
   // alert('unexpected error occured...!');
   this.toastrservice.error('unexpected error occured...!');
  }
}
)
//this.alertmessage='todos updated successfully...!'
this.toastrservice.success('todos updated successfully....!');
    }
    else {
      //create
      this.todoservice.create(this.todoModel).subscribe(response =>{
        console.log(response);
      },
      (error:Response)=>{
        if(error.status===404){
         // alert('resource not found...!');
         this.toastrservice.error('resourse not found...!');
        }
        else if(error.status===400){
         // alert('bad request.....!');
         this.toastrservice.error('bad request...!');
        }
        else{
         // alert('unexpected error occured....!');
         this.toastrservice.error('unexpected error occured..!');
        }
      }
      );
      //this.alertmessage='TODOS created successfully...!'
      this.toastrservice.success('todos created successfully...!');
    }
    this.loadData();
    this.todoModel= new todoModel();
  }

  

  }
    
    
    

