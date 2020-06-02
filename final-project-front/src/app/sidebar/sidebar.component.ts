import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { DefaultService } from '../default.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


baseUrl: string = `https://api.themoviedb.org/3/${this._default.genres}?api_key=${this._default.api_key}&language=en-US`
list: any = [];





  constructor( private _http : HttpClient, private _default: DefaultService ) { }

  ngOnInit() {
  
    this._http.get(this.baseUrl).subscribe( (data:any)=>{
      console.log(data)
      this.list = data.genres;
    })
  
  
  
    //   this._default.getGenres().subscribe(
  //     (res) => {
  //       console.log(res)
  //       this.genres = res.results

  //   })
   }

}
