import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as $ from 'jquery'
import * as cheerio from 'cheerio';



@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  @Input() Url: string;
  links: any;
  titles: any;
  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    this.load();
  }
  subload(url: string){
    const extension  = url.substr(-3);
    switch (extension) {
      case 'mkv':
        console.log('its mkv');
        break;
      case 'flv':
        break;
      case 'mp4':
        break;
      case 'mp3':
      
      case 'wav':
        break;
      default:

        break;
    }

    this.Url = url;
    this.load();
  }

  load() {
    let links = [];
    let titles = [];
    let original = this.Url;
    if (this.Url) {
      $.ajax({
        url: this.Url,
      }).done(function (data) {
        let fixed = data.replaceAll('href="', 'href="' + original);
        //let a = $(fixed).n('a').attr('href');
        // console.log(a);
        // $(fixed).find("a").each( function(){
        //   links.push(this.href);
        // } )
        $(fixed)
          .find('a')
          .each(function () {
            links.push(this.href);
            //titles.push(this.textContent);
          });
       
      });
    }
    this.links = links;
    this.titles = titles;
  }
}
