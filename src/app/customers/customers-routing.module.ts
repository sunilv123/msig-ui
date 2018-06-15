import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CusotomersListComponent } from './cusotomers-list/cusotomers-list.component';
import {CustomerRequestComponent} from './../customers/cusotomers-list/customer-request/customer-request.component';

const routes: Routes = [

  
  {
    path: '', component : CusotomersListComponent
  },
  
    {
      path : 'request', component: CustomerRequestComponent
    }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
