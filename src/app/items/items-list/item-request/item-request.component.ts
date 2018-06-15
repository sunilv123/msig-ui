import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-request',
  templateUrl: './item-request.component.html',
  styleUrls: ['./item-request.component.css']
})
export class ItemRequestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

@Input() item = {};
@Output() childItem = new EventEmitter<any>(); 

callParent(childVal : string){
 this.childItem.emit(childVal);
}

}
