import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { AddressListComponent } from './address-list/address-list.component';

@NgModule({
  imports: [
    CommonModule,
    AddressRoutingModule
  ],
  declarations: [AddressListComponent]
})
export class AddressModule { }
