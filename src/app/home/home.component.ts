import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as $ from 'jquery'
import { nextTick } from 'process';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apikey = environment.apiKey;
  result:any;
  searchterm:any;
  HomeisActive:boolean = true;
  ResultisActive:boolean = false;
  loadedCharacter: {};
  Url:string = "test";
  constructor(private http: HttpClient,) { }

  ngOnInit() {}


  search(){
    
    let subscriptionKey = this.apikey;
    let customConfigId = 'YOUR-CUSTOM-CONFIG-ID';
    let searchTerm = 'inbody:"parent directory"'+ this.searchterm +'';

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key':subscriptionKey
   });
   let options = {
      headers: headers
   }

    // here your url
    let url = 'https://api.bing.microsoft.com/v7.0/search?' +
      'q=' + searchTerm + '&count=45';

    // http rquest


    this.http.get(url, options)
      .subscribe(data => {
        this.result = data['webPages']['value'];
        console.log(data);
      });

  }

  

}
