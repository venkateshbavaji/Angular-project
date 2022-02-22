import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { photoserrvice } from './photo.service';
import { photoModel } from './ptoto.model';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  
})
export class PhotoComponent implements OnInit {


lstphoto: photoModel[]=[];
p:number=2;
APIBaseUrl: string ='https://jsonplaceholder.typicode.com/photos';
title:string = 'Create a post';
photoModel = new photoModel();
alertmessage: string='';
  constructor(private photoservice:photoserrvice , private toastrservice:ToastrService){
  }
  ngOnInit(): void {
  this.loadData();

  }
  loadData() {
    this.photoservice.getall().subscribe(response =>{
      this.lstphoto = response as photoModel[];
  
},
(error: Response)=>{
  console.log(error);
  if(error.status===404){
    //expectederror
    //alert('resource not found');
    this.toastrservice.error('resource not found...!');
  }
}
)
  }
  addphoto() {
    this.title ='create a photo';
    this.photoModel = new photoModel();
    this.alertmessage='';
  }
  editphoto(photo :photoModel){
    this.title = 'Edit a photo';
    this.photoModel = photo;
    this.alertmessage='';
  }
  viewphoto(photo:photoModel){
    this.title = 'view a photo';
    this.photoModel= photo;
    this.alertmessage='';
  }
  deletephoto(id:number){
if (confirm("are you sure to delete ?")){
let url = this.APIBaseUrl + '/' + id;
this .photoservice.delete(id).subscribe(response=>{
  console.log(response);
  this.toastrservice.error('photo deleted successfully...!');
},
(error:Response)=>{
  if (error.status===404){
   // alert('response not found....!');
   this.toastrservice.error('response not found....!')
  }
  else{
   // alert('unexpected error occured....!');
   this.toastrservice.error('unexpected error occured....!');
  }
}
);
this.loadData();
}
  }
  savephotoDetail(){
    if(this.photoModel.id){
//update
let url= this.APIBaseUrl +'/' + this.photoModel.id;
this.photoservice.update(this.photoModel.id, this.photoModel).subscribe(response =>{
  console.log(response);
},
(error:Response)=>{
  if (error.status===404){
    //alert('resource not found.....!');
    this.toastrservice.error('response not found....!')
  }
  else if (error.status===400){
   // alert('bad request....!');
   this.toastrservice.error('bad request...!');
  }
  else{
   // alert('unexpected error occured...!');
   this.toastrservice.error('unexpected error occured....!');
  }
}
)
//this.alertmessage='photo updated successfully...!'
this.toastrservice.success('photo uploaded successfully...!');
    }
    else {
      //create
      this.photoservice.create(this.photoModel).subscribe(Response =>{
        console.log(Response);
      },
      (error:Response)=>{
        if(error.status===404){
         // alert('resource not found...!');
         this.toastrservice.error('resource not found...!');
        }
        else if(error.status===400){
         // alert('bad request.....!');
         this.toastrservice.error(' bad request....!');
        }
        else{
         // alert('unexpected error occured....!');
         this.toastrservice.error('unexpected error....!');
        }
      }
      );
     // this.alertmessage='photo created successfully...!'
     this.toastrservice.success('photo created successfully....!');
    }
    this.loadData();
    this.photoModel = new photoModel();
  }

  

  }

  


