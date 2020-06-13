import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApihandlerService {


  stateUserId: string = sessionStorage.getItem("userId")

  // properties //

  baseUrl: string = "http://localhost:3000/api/";
  apiUrl: string = "https://api.themoviedb.org/3/"
  api_key: string = "109e006f232a954974d2a7a4d69190a6"
  results = [];

  movieInfo;


  constructor( private _http: HttpClient ) { }




  getTrending(){
    return this._http.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${this.api_key}`)
  }


 addFavorite(movieInfo){
   return this._http.post(`${this.baseUrl}appUsers/${this.stateUserId}/favorites`, movieInfo)
 }


 







}