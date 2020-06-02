import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:3000/api";
  //
  apiUrl: string = "https://api.themoviedb.org/3/"

  appUserUrl: string = "appUsers/";


  firstName;
  isLoggedIn;
  api_key: string = "109e006f232a954974d2a7a4d69190a6"
  




  constructor(private _http: HttpClient) { }









  

  registerUser(userCredentials){
    return this._http.post(`${this.baseUrl}${this.appUserUrl}`, userCredentials);
  }



}
