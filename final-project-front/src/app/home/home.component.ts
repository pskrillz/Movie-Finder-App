import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

size: string = "w500";
posterPath: string;
imgBaseUrl: string = `https://image.tmdb.org/t/p/${this.size}/${this.posterPath}`;
url: string = "https://api.themoviedb.org/3/trending/movie/week?api_key=109e006f232a954974d2a7a4d69190a6";
movies: any = []


  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this._http.get(this.url).subscribe(
      (res:any) => {
        console.log(res)
        this.movies = res.results
      })


  }

}
