import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  baseUrl: string = "http://localhost:3000/api/";
  //
  apiUrl: string = "https://api.themoviedb.org/3/"

  appUserUrl: string = "appUsers/";
  loginUrl: string = "appUsers/login";
  api_key: string = "109e006f232a954974d2a7a4d69190a6"
  genres: string = "genre/movie/list"
  searchPath: string = "search/company?"

  url;


  firstName;
  isLoggedIn;
  sessionToken;
  userId;
  searchInput;
  movies = [];



  // dynamic display items
  searchExecuted= null;




  constructor(private _http: HttpClient) { }

  registerUser(userCredentials){
    return this._http.post(`${this.baseUrl}${this.appUserUrl}`, userCredentials);
  }


  loginUser(userCredentials){
    return this._http.post(`${this.baseUrl}${this.loginUrl}`, userCredentials)
  }



  movieDisplay(){
    this.url = `${this.apiUrl}${this.searchPath}api_key=${this.api_key}&query=${this.searchInput}&page=1`
    this._http.get(this.url).subscribe(
      (res:any) => {
        console.log(res)
        this.movies = res.results
         })


        //  this.searchExecuted = true;

  }










}
