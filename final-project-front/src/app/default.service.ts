import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {


  apiUrl: string = "https://api.themoviedb.org/3/"
  api_key: string = "109e006f232a954974d2a7a4d69190a6"
  genres: string = "genre/movie/list"



  constructor(private _http : HttpClient) { }



  getGenres() {
    let url = `${this.apiUrl}${this.genres}?api_key=${this.api_key}&language=en-US`
    return this._http.get(url)
  }



}
