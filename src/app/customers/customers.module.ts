import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { CustomersRoutingModule } from './customers-routing.module';
import { CusotomersListComponent } from './cusotomers-list/cusotomers-list.component';
import { CustomerRequestComponent } from './cusotomers-list/customer-request/customer-request.component';

@NgModule({
  imports: [
    CustomersRoutingModule,
    SharedModule
  ],
  declarations: [CusotomersListComponent, CustomerRequestComponent]
})
export class CustomersModule { }
