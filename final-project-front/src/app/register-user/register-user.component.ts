import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

form = {
  firstName: null,
  lastName: null, 
  email: null, 
  password: null, 
};




  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }


  signUp(){
    this._userService.registerUser(this.form).subscribe(
      ( res : any) => {
        console.log(res);
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('userId', res.userId);
        this._userService.firstName = res.firstName;
        this._userService.isLoggedIn = true;
        this.goToDash();
      })
  }

goToDash(){
  this.router.navigate(['/home'])
}




}
