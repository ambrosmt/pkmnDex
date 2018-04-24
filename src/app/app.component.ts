import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { HttpService } from "../app/http.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pok\u00E9Dex';
  placeholder = "Search for Pok\u00E9mon by Name or  #";
  //check for activity in search bar
  search = false;
  //if serch times out with 404
  notFound = false;
  //grab URL and remove "http://localhost:4200"
  pkmnData = {}
  constructor(private _pkmnService: HttpService){ }

  ngOnInit(){
  }
  onTxtChange(rawId : string){
    if(rawId.length > 0){
      this.search = true;
    }
    else{
      this.search = false;
      this.pkmnData = {};
    }
    var pkmnId = rawId.toLowerCase();
    console.log(pkmnId);
    var pkmnObservable = this._pkmnService
      .getPokemon(pkmnId)
      .subscribe(res => {
        console.log(res);
        //if(res !=  404){
          this.pkmnData = res;
          this.notFound = false;
          console.log("\n All Data")
          console.log(this.pkmnData);
        // }
        // else{
        //   //setTimeout(function(){},3000);
        //   this.search = false;
        //   this.notFound = true;
        //   this.pkmnData = {};
        // }
      })
    
  }
}