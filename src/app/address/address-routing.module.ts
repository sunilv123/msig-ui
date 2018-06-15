import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddressListComponent} from './address-list/address-list.component';

const routes: Routes = [

  {
    path:'', redirectTo : 'list'
  },
  {
    path:'list', component : AddressListComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressRoutingModule { }
