
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { commentModel } from "./comment.model";
import { commentserrvice } from "./comment.service";


@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
})




export class commentcomponent implements OnInit{
    title:string="write a comment";
    commentModel= new commentModel();
    alertmessage: string='';
    lstcomment:commentModel[]=[];
    p:number=1;
ApIBaseUrl: string = 'https://jsonplaceholder.typicode.com/comments';
constructor(private commentservice: commentserrvice ,private toastrservice:ToastrService){
}
ngOnInit(): void {
  this.loadData();

  }
  loadData() {
    this.commentservice.getall().subscribe(response =>{
      this.lstcomment = response as commentModel[];
  
},
(error: Response)=>{
  console.log(error);
  if(error.status===404){
    //expectederror
   // alert('resource not found');
   this.toastrservice.error('resourse not found....!');
  }
}
)
  }
  addPost() {
    this.title ='create a comment';
    this.commentModel = new commentModel();
    this.alertmessage='';
  }
  editPost(comment :commentModel){
    this.title = 'Edit a comment';
    this.commentModel = comment;
    this.alertmessage='';
  }
  viewPost(comment:commentModel){
    this.title = 'view a comment';
    this.commentModel= comment;
    this.alertmessage='';
  }
  deletepost(id:number){
if (confirm("are you sure to delete ?")){
let url = this.ApIBaseUrl + '/' + id;
this .commentservice.delete(id).subscribe(response=>{
  console.log(response);
  this.toastrservice.error('comment deleted successfully....!')
},
(error:Response)=>{
  if (error.status===404){
   // alert('response not found....!');
   this.toastrservice.error('response not found...!')
  }
  else{
   // alert('unexpected error occured....!');
   this.toastrservice.error('unexpected error found...!');
  }
}
);
this.loadData();
}
  }
  savePostDetail(){
    if(this.commentModel.id){
//update
let url= this.ApIBaseUrl +'/' + this.commentModel.id;
this.commentservice.update(this.commentModel.id, this.commentModel).subscribe(response =>{
  console.log(response);
},
(error:Response)=>{
  if (error.status===404){
    alert('resource not found.....!');
  }
  else if (error.status===400){
    alert('bad request....!');
  }
  else{
   // alert('unexpected error occured...!');
   this.toastrservice.error('unexpected error found...!');
  }
}
)
//this.alertmessage='comment updated successfully...!'
this.toastrservice.success('comment updated successfully');
    }
    else {
      //create
      this.commentservice.create(this.commentModel).subscribe(Response =>{
        console.log(Response);
      },
      (error:Response)=>{
        if(error.status===404){
         // alert('resource not found...!');
         this.toastrservice.error('resource not found...!');
        }
        else if(error.status===400){
         // alert('bad request.....!');
         this.toastrservice.error('bad request.....!');
        }
        else{
         // alert('unexpected error occured....!');
         this.toastrservice.error('unexpected error....!')
        }
      }
      );
     // this.alertmessage='comment created successfully...!'
     this.toastrservice.success('comment create successfully...!')
    }
    this.loadData();
    this.commentModel = new commentModel();
  }

  

  }

  


