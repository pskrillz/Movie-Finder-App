import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';


import {MatDividerModule} from '@angular/material/divider'; 
import {MatButtonModule} from '@angular/material/button'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    LoginComponent,
    SearchComponent,
    MyFavoritesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ClarityModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
