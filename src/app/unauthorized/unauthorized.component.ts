import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent implements OnInit {

  constructor() { }
  imgUrl: string='https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';
  ngOnInit(): void {
  }

}
