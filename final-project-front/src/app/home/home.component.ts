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



  searchMovies(searchInput) {
    this._userService.searchMovies(this.searchInput)
    this._http.get(url).subscribe(
      (res : any) => {
        this.searchResults = res.results
        console.log(res)
      }
    )
  }




  ngOnInit() {
    this._http.get(this.url).subscribe(
      (res:any) => {
        // console.log(res)
        this._userService.movies = res.results
         })

  }









  // movieSearch(){
  //   this.url = `${this._userService.apiUrl}${this._userService.searchPath}api_key=${this._userService.api_key}&query=${this._userService.searchInput}&page=1`
  //   this._userService.movieDisplay()
  // }


}
