import { Component, OnInit } from '@angular/core';
import {DataServiceService} from './../../customers/data-service.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

   childVal : string; 

  item = {
    "itemName" : 'PC',
    "price" : 1200
  };

  itemName = 'Sunil';

  constructor(private dataServiceService : DataServiceService) { }

  ngOnInit() {
  }
  
  setItemName(){
  
    this.dataServiceService.setUser(this.itemName);   
  }

  getChildVal(value : string){
    alert(value)
    this.childVal = value;
  }

}
