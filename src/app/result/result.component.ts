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
            titles.push(this.textContent);
          });
        console.log(JSON.stringify(titles));
        console.log(JSON.stringify(links));
      });
    }
    this.links = links;
    this.titles = titles;
  }
}
