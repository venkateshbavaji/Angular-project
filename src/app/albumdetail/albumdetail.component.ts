import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { albumModel } from '../album/album.model';
import { albumservice } from '../album/album.service';

@Component({
  selector: 'app-albumdetail',
  templateUrl: './albumdetail.component.html',
  
})
export class AlbumdetailComponent implements OnInit {
albumModel= new albumModel();
id:number;
title:string;
  constructor(private albumservice:albumservice, private activatedroute:ActivatedRoute) {

   }

  ngOnInit(): void {
    let id:number= +this.activatedroute.snapshot.paramMap.get('id');
    this.id= + this.activatedroute.snapshot.paramMap.get('id');
    this.title=this.activatedroute.snapshot.paramMap.get('title');
    this.albumservice.getbyId(id).subscribe(response=>{
      this.albumModel = response as albumModel;
    })
  }

}
