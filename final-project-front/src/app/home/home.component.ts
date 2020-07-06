
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { UserService } from "../user.service"
import { Router } from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //modal state
  basic: boolean;


  notFavorited = true;


url: string = "https://api.themoviedb.org/3/trending/movie/week?api_key=109e006f232a954974d2a7a4d69190a6";
movies: any = [];
searchResults = [];


searchInput = this._userService.searchInput;



userId = sessionStorage.getItem("userId")


movieInfo = {
  movieTitle: null,
  movieID: null,
  userId: this.userId,
}








  constructor(private _http: HttpClient, public _userService: UserService) { }






  ngOnInit() {
    this._http.get(this.url).subscribe(
      (res:any) => {
        console.log(res.results)
        this._userService.movies = res.results
         })
      this._userService.showFavorites()
      this._userService.checkFavorited()
       if (this._userService.isLoggedIn === true){
         window.location.reload();
         this._userService.isLoggedIn = false
       }
  }




  // reloadHome(){
  //   if (this.router && this.router.url === '/home') {
  //   window.location.reload();
  // } else {
  //   this.router.navigate(['/home']);
  // }
  // }



addFavorite(movieTitle, movieId) {
  if (this._userService.stateUserId === null) {
    return alert("You are not logged in.")
  }

  
  this.movieInfo.movieTitle = movieTitle;
  this.movieInfo.movieID = movieId;
  this._userService.addFavorite(this.movieInfo)
 
  this._userService.checkFavorited()
  
}


openModal(){
  if (this.basic === true){
    return this.basic = false
  }
  this.basic = true;
  console.log("test")
}








}
