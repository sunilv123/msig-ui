import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemRequestComponent } from './items-list/item-request/item-request.component';

@NgModule({
  imports: [
    SharedModule,
    ItemsRoutingModule
  ],
  declarations: [ItemsListComponent, ItemRequestComponent]
})
export class ItemsModule { }
