import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustcreateComponent } from './custcreate/custcreate.component';
import { RestaddComponent } from './restadd/restadd.component';

const routes: Routes = [{path:"",component:HomeComponent},
{path:"login",component:LoginComponent},
{path:"restaurant",component:RestaurantComponent},
{path:"navbar",component:NavbarComponent},
{path:"custcreate",component:CustcreateComponent},
{path:"restadd",component:RestaddComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
