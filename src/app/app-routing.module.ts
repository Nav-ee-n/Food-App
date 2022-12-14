import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustcreateComponent } from './custcreate/custcreate.component';
import { RestaddComponent } from './restadd/restadd.component';
import { BookingComponent } from './booking/booking.component';
import { RestloginComponent } from './restlogin/restlogin.component';
import { RestviewComponent } from './restview/restview.component';
import { Rest1Component } from './rest1/rest1.component';
import { Rest3Component } from './rest3/rest3.component';
import { Rest2Component } from './rest2/rest2.component';
import { RestableComponent } from './restable/restable.component';
import { AdmintableComponent } from './admins/admintable/admintable.component';
import { MenutableComponent } from './menutable/menutable.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { ViewmenuComponent } from './viewmenu/viewmenu.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';
import { AdminfeedbackComponent } from './adminfeedback/adminfeedback.component';
import { AdminsecondComponent } from './adminsecond/adminsecond.component';

const routes: Routes = [{path:"",component:HomeComponent},
{path:"login",component:LoginComponent},
{path:"restaurant",component:RestaurantComponent},
{path:"navbar",component:NavbarComponent},
{path:"custcreate",component:CustcreateComponent},
{path:"restadd",component:RestaddComponent},
{path:"booking",component:BookingComponent},
{path:"restlogin",component:RestloginComponent},
{path:"restview",component:RestviewComponent},
{path:"rest1",component:Rest1Component},
{path:"rest2",component:Rest2Component},
{path:"rest3",component:Rest3Component},
{path:"restable",component:RestableComponent},
{path:"admintable",component:AdmintableComponent},
{path:"menutable",component:MenutableComponent},
{path:"addmenu",component:AddmenuComponent},
{path:"viewmenu",component:ViewmenuComponent},
{path:"vieworder",component:ViewOrderComponent},
{path:"feedback",component:FeedbackComponent},
{path:"viewfeedback",component:ViewfeedbackComponent},
{path:"adminfeedback",component:AdminfeedbackComponent},
{path:"adminsecond",component:AdminsecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
