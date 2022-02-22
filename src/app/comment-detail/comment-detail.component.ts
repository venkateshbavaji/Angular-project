import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { commentModel } from '../comment/comment.model';
import { commentserrvice } from '../comment/comment.service';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {

commentModel= new commentModel();
postId:number;
name: string;
  constructor(private commentservice:commentserrvice, private activatedroute:ActivatedRoute) {

   }

  ngOnInit(): void {
    let id:number=+this.activatedroute.snapshot.paramMap.get('id');
    this.postId=+this.activatedroute.snapshot.paramMap.get('postId');
     this.name= this.activatedroute.snapshot.paramMap.get('name');
    this.commentservice.getbyId(id).subscribe(response=>{
this.commentModel= response as commentModel;
    })
  }

}
