import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { nextTick } from 'process';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery'
import { JsScriptsService } from '../js-scripts.service';



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
  ResultisActive2:boolean = true;
  loadedCharacter: {};
  Url:string;
  constructor(private http: HttpClient,private js: JsScriptsService) { }

  ngOnInit() {
    this.js.loadScript();
  }

  search(){
    let subscriptionKey = this.apikey;
    let customConfigId = 'YOUR-CUSTOM-CONFIG-ID';
    let searchTerm = 'intitle:"index of" contains:(mkv mp4 avi mov mpg wmv divx mpeg)' + this.searchterm;
    //let searchTerm = this.searchterm +'(mkv|mp4|avi|mov|mpg|wmv|divx|mpeg) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|index-of|wallywashis|downloadmana)';

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

  loadpage(url){
    this.Url = url;
    this.HomeisActive = false;
    this.ResultisActive = true;
  }

  back1(){
    if(!this.HomeisActive){
      this.HomeisActive = true;
      this.ResultisActive = false;
    }

  }



}
