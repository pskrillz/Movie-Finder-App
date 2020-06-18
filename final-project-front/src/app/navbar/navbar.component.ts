import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service"
import { Router } from "@angular/router"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn = sessionStorage.getItem("userId");

  constructor(public _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
  }






}
