
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { albumModel } from './album.model';
import { albumservice } from './album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  
})
export class AlbumComponent implements OnInit {
  lstalbum: albumModel[]=[];
  p:number=1;
  title:string='create a todos';
  albumModel = new albumModel();
  APIBaseUrl:string=('https://jsonplaceholder.typicode.com/albums');
  alertmessage:string='';
  
    constructor(private albumservice:albumservice , private toastrservice:ToastrService) { 
  
    }
  
    ngOnInit(): void {
      this.loadData();
    }
    loadData(){
      this.albumservice.getall().subscribe(response=>{
      this.lstalbum = response as albumModel[];
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
    addalbum() {
      this.title ='create a album';
      this.albumModel = new albumModel();
      this.alertmessage='';
    }
    editalbum(album :albumModel){
      this.title = 'Edit a album';
      this.albumModel = album;
      this.alertmessage='';
    }
    viewalbum(album:albumModel){
      this.title = 'view a album';
      this.albumModel= album;
      this.alertmessage='';
    }
    deletealbum(id:number){
  if (confirm("are you sure to delete ?")){
  let url = this.APIBaseUrl + '/' + id;
  this .albumservice.delete(id).subscribe(response=>{
    console.log(response);
    this.toastrservice.success('album deleted successfully...!')
  },
  (error:Response)=>{
    if (error.status===404){
     // alert('response not found....!');
     this.toastrservice.error('resourse not found...!');
    }
    else{
     // alert('unexpected error occured....!');
     this.toastrservice.error('unexpected error occured...!');
    }
  }
  );
  this.loadData();
  }
    }
    savealbumDetail(){
      if(this.albumModel.id){
  //update
  let url= this.APIBaseUrl +'/' + this.albumModel.id;
  this.albumservice.update(this.albumModel.id, this.albumModel).subscribe(response =>{
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
     // alert('unexpected error occured...!');
     this.toastrservice.error('unexpected error occured...!');
    }
  }
  )
  this.toastrservice.success('album  updated successfully...!');
  //this.alertmessage='album updated successfully...!'
      }
      else {
        //create
        this.albumservice.create(this.albumModel).subscribe(Response =>{
          console.log(Response);
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
            //alert('unexpected error occured....!');
            this.toastrservice.error('unexpected error occured..!');
          }
        }
        );
        //this.alertmessage='album created successfully...!'
        this.toastrservice.success('albbum created successfully....!');
      }
      this.loadData();
      this.albumModel= new albumModel();
    }
  
    
  
    }
      
      
      
  
  