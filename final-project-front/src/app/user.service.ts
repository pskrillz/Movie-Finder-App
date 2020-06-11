import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ApihandlerService } from "./apihandler.service"

@Injectable({
  providedIn: 'root'
})
export class UserService {







  baseUrl: string = "http://localhost:3000/api/";
  //
  apiUrl: string = "https://api.themoviedb.org/3/"

  appUserUrl: string = "appUsers/";
  loginUrl: string = "appUsers/login";
  api_key: string = "109e006f232a954974d2a7a4d69190a6";
  genres: string = "genre/movie/list";
  searchPath: string = "search/company?";



//state changers
stateUserId: string = sessionStorage.getItem("userId")


  url;


  firstName;
  isLoggedIn;
  sessionToken;
  userId;
  searchInput;
  searchResults= [];

// main display data flow
  movies = [];





  constructor(private _http: HttpClient, private _api: ApihandlerService) { }

  registerUser(userCredentials){
    return this._http.post(`${this.baseUrl}${this.appUserUrl}`, userCredentials);
  }


  loginUser(userCredentials){
    return this._http.post(`${this.baseUrl}${this.loginUrl}`, userCredentials)
  }




  searchMovies(){
    this.url = `https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&language=en-US&query=${this.searchInput}&page=1&include_adult=false`;
    this._http.get(this.url).subscribe(
      (res:any) => {
        console.log(res)
        this.movies = res.results
         })
        //  this.searchExecuted = true;
  }




 

  
getTrending(){
  return this._api.getTrending().subscribe(
    ( res : any) => {
      this.movies = res.results
    })
}

addFavorite(movieInfo){
this._api.addFavorite(movieInfo).subscribe(
  (res : any) => {
    console.log(res)
  })
}





}
