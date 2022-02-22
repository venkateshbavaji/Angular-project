import { Component,  EventEmitter,OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-child-out',
  templateUrl: './child-out.component.html',
  styleUrls: ['./child-out.component.css']
})
export class ChildOutComponent implements OnInit {
@Output() newItemEvent= new EventEmitter();
  constructor() { }
  addNewItem(Item: string) {
    return this.newItemEvent.emit(Item);
  }

  ngOnInit(): void {
  }

}
