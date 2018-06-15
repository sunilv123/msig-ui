import { Component, OnInit, Input } from '@angular/core';
import {HEROES} from './../../hero';
import {DataServiceService} from './../../customers/data-service.service';
import {UtilService} from './../../util.service';
import { Config } from 'protractor';


@Component({
  selector: 'app-cusotomers-list',
  templateUrl: './cusotomers-list.component.html',

})
export class CusotomersListComponent {

  heroes = HEROES;
  master = 'Master';
  itemName = null;
  config: Config;
  birthDay = new Date();
  
  powers = ['JAVA', 'HTML5',
            'NODE JS', 'ANGULAR6'];

   model = {
     "name" : null,
     "desg" : null,
     "exp"  : null,
     "tech" : 'JAVA'
   }         

  constructor(private dataServiceService : DataServiceService,
              private utilService : UtilService
  ){}

  ngOnInit() {
    this.getUser();
 }
  getUser() {
    this.dataServiceService.currentUser.subscribe(user => {
      this.itemName = user;
    }, err => {
      console.log(err);
    });
  }

  onSubmit() { 
    console.log(this.model);
    
    let url = 'http://localhost:9292/api/login';
    this.utilService.getHttpData(url) .subscribe(heroes => console.log(heroes)
    );
  };

  get format(){
    return "dd-MMM-yyyy";
  }

  }


