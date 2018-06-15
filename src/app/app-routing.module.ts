import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './auth-guard.service';


export const routes: Routes = [
  {
    path: '',
    redirectTo : 'customers', pathMatch : 'full'
   
  },
  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule'
  },
  {
    path: 'items',
    loadChildren: './items/items.module#ItemsModule'
  },{
    path: 'shop',
    loadChildren: './shop/shop.module#ShopModule'
  },{
    path: 'address',
    loadChildren: './address/address.module#AddressModule'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
   path: '**',
   component : PageNotFoundComponent
  },
];



@NgModule({
  declarations: [

    
  ],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
