import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterUserComponent } from '../app/register-user/register-user.component'
import { HomeComponent } from  '../app/home/home.component'

const routes: Routes = [

{
  path: "",
  component: HomeComponent

},
{
  path: "register",
  component: RegisterUserComponent
},

]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
