import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { postModel } from '../post/post.model';
import { postservice } from '../post/post.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {
postModel = new postModel();
userId: number;
title: string;
  constructor(private postservice:postservice, private activatedRoute:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    let id: number = +this.activatedRoute.snapshot.paramMap.get('id');
    this.userId = +this.activatedRoute.snapshot.queryParamMap.get('userId');
    this.title = this.activatedRoute.snapshot.queryParamMap.get('title');
    
    this.postservice.getbyId(id).subscribe(response=>{
      this.postModel = response as postModel;
    })
  }
  

}
