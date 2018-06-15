import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


/* App Root */
import { AppComponent } from './app.component';


/* Routing Module */
import { AppRoutingModule } from './/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SweetAlert } from 'angular-sweetalert';


/* Feature Modules */
//  import { CustomersModule } from './customers/customers.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    //FormsModule,
    AppRoutingModule
    
  ],
  providers: [SweetAlert],
  bootstrap: [AppComponent]
})
export class AppModule { }
