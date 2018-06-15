import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ItemsListComponent} from './items-list/items-list.component';


const routes: Routes = [
  {
    path:'', redirectTo : 'list'
  },
  {
    path:'list', component : ItemsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
