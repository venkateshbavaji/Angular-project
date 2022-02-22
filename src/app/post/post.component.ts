import { Component} from '@angular/core';

import { postModel } from './post.model';
import { postservice } from './post.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  
})
export class PostComponent {

lstpost: postModel[]=[];
p: number = 1;

APIBaseUrl: string ='https://jsonplaceholder.typicode.com/posts';
title:string = 'Create a post';
postModel = new postModel();
alertmessage: string='';
  constructor(private postservice: postservice,private toastrservice:ToastrService){
  }
  ngOnInit(): void {
  this.loadData();

  }
  loadData() {
this.postservice.getall().subscribe(response =>{
  this.lstpost = response as postModel[];
  
},
(error: Response)=>{
  console.log(error);
  if(error.status===404){
    //expectederror
   // alert('resource not found');
   this.toastrservice.error('resource not found....!');
  }
}
)
  }
  addPost() {
    this.title ='create a post';
    this.postModel = new postModel();
    this.alertmessage='';
  }
  editPost(post :postModel){
    this.title = 'Edit a post';
    this.postModel = post;
    this.alertmessage='';
  }
  viewPost(post:postModel){
    this.title = 'view a post';
    this.postModel = post;
    this.alertmessage='';
  }
  deletepost(id:number){
if (confirm("are you sure to delete ?")){
let url = this.APIBaseUrl + '/' + id;
this .postservice.delete(id).subscribe(response=>{
  console.log(response);
  this.toastrservice.success('post deleted successfully...!');
},
(error:Response)=>{
  if (error.status===404){
    //alert('response not found....!');
    this.toastrservice.error('resource not found....!');
  }
  else{
    //alert('unexpected error occured....!');
    this.toastrservice.error('unexpected error occured....!');
  }
}
);
this.loadData();
}
  }
  savePostDetail(){
    if(this.postModel.id){
//update
let url= this.APIBaseUrl +'/' + this.postModel.id;
this.postservice.update(this.postModel.id, this.postModel).subscribe(response =>{
  console.log(response);
},
(error:Response)=>{
  if (error.status===404){
   // alert('resource not found.....!');
   this.toastrservice.error('resource not found....!');
  }
  else if (error.status===400){
    //alert('bad request....!');
    this.toastrservice.error('bad request....!');
  }
  else{
   /// alert('unexpected error occured...!');
   this.toastrservice.error('unexpected error found...1');
  }
}
)
//this.alertmessage='post updated successfully...!'
this.toastrservice.success('post updated successfully...!');
    }
    else {
      //create
      this.postservice.create(this.postModel).subscribe(Response =>{
        console.log(Response);
      },
      (error:Response)=>{
        if(error.status===404){
          //alert('resource not found...!');
          this.toastrservice.error('resource not found....!');
          
        }
        else if(error.status===400){
          //alert('bad request.....!');
          this.toastrservice.error('bad request....!');
        }
        else{
          //alert('unexpected error occured....!');
          this.toastrservice.error('unexpected error found...1');
        }
      }
      );
     // this.alertmessage='post created successfully...!'
     this.toastrservice.success('post created successfully...!');
    }
    this.loadData();
    this.postModel = new postModel();
  }

  

  }

  

