
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { UserService } from '../user.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


baseUrl: string = `https://api.themoviedb.org/3/${this._userService.genres}?api_key=${this._userService.api_key}&language=en-US`
list: any = [];





  constructor( private _http : HttpClient, public _userService: UserService ) { }

  ngOnInit() {
    this._http.get(this.baseUrl).subscribe( (data:any)=> this.list = data.genres)
  }
  


}
