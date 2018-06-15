import { Component, OnInit ,Input} from '@angular/core';
import { Hero } from './../../../hero';

@Component({
  selector: 'app-customer-request',
  templateUrl: './customer-request.component.html',
  styleUrls: ['./customer-request.component.css']
})
export class CustomerRequestComponent{


  @Input() hero: Hero;
  @Input('master') masterName: string;

}
