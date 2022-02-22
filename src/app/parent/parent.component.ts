import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {
  fruits:string[]=['apple','mango','dragonfruit','banana','grapes'];
addItem(Item:any){
  this.fruits.push(Item);
}
}