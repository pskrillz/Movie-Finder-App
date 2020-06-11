import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { UserService } from "../user.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


url: string = "https://api.themoviedb.org/3/trending/movie/week?api_key=109e006f232a954974d2a7a4d69190a6";
movies: any = [];
searchResults = [];

searchInput = this._userService.searchInput;








  constructor(private _http: HttpClient, public _userService: UserService) { }






  ngOnInit() {
    this._http.get(this.url).subscribe(
      (res:any) => {
        // console.log(res)
        this._userService.movies = res.results
         })

  }








}
