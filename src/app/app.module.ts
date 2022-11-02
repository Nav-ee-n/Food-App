import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustcreateComponent } from './custcreate/custcreate.component';
import { RestaddComponent } from './restadd/restadd.component';
import { BookingComponent } from './booking/booking.component';
import { RestloginComponent } from './restlogin/restlogin.component';
import { RestviewComponent } from './restview/restview.component';
import { AdminComponent } from './admin/admin.component';
import { Rest1Component } from './rest1/rest1.component';
import { Rest2Component } from './rest2/rest2.component';
import { Rest3Component } from './rest3/rest3.component';
import { RestableComponent } from './restable/restable.component';
import { TableComponent } from './table/table.component';
import { AdmintableComponent } from './admins/admintable/admintable.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { MenutableComponent } from './menutable/menutable.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { ViewmenuComponent } from './viewmenu/viewmenu.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { Navbar3Component } from './navbar3/navbar3.component';
import { AdminfeedbackComponent } from './adminfeedback/adminfeedback.component';
import { AdminsecondComponent } from './adminsecond/adminsecond.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RestaurantComponent,
    NavbarComponent,
    CustcreateComponent,
    RestaddComponent,
    BookingComponent,
    RestloginComponent,
    RestviewComponent,
    AdminComponent,
    Rest1Component,
    Rest2Component,
    Rest3Component,
    RestableComponent,
    TableComponent,
    AdmintableComponent,
    AddmenuComponent,
    MenutableComponent,
    AdminnavbarComponent,
    ViewmenuComponent,
    ViewOrderComponent,
    FeedbackComponent,
    ViewfeedbackComponent,
    Navbar2Component,
    Navbar3Component,
    AdminfeedbackComponent,
    AdminsecondComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
