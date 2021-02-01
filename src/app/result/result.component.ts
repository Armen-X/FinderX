import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as $ from 'jquery'
import * as cheerio from 'cheerio';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { JsScriptsService } from '../js-scripts.service';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  @Input() Url: string;
  links: any;
  titles: any;
  table: any;
  urlsfromhtml = [];
  constructor(private js: JsScriptsService, private http: HttpClient) {}

  ngOnInit() {
    this.js.loadScript();
  }
  ngOnChanges(changes: SimpleChanges) {
    this.load();
  }

  subload(url: string) {
    console.log(url);
    let extension = url.substr(-3);
    let ex = extension.toLowerCase();
    switch (ex) {
      case 'mkv':
        console.log('its mkv');
        break;
      case 'flv':
        console.log('its flv');
        break;
      case 'mp4':
        //this.ModalOpen();
        console.log('its mp4');
        break;
      case 'mp3':
        console.log('its mp3');
        break;
      case 'mov':
        console.log('its mov');
        break;
      case 'wav':
        break;
      default:
        break;
    }

    // this.Url = url;
    // this.load();
  }

  load() {
    let original = this.Url;
    this.http.get(this.Url, { responseType: 'text' }).subscribe((data) => {
      let maindata =  data.toLowerCase();
      let fixed = maindata.replaceAll('href="', 'href="' + original);
      this.table = fixed;




    });
  }

  subloader(){
    alert('you have triggerd me bitch');
  }
  // load() {
  //   let original = this.Url;
  //   this.http.get(this.Url, { responseType: 'text' }).subscribe((data) => {
  //     let maindata =  data.toLowerCase();
  //     let fixed = maindata.replaceAll('href="', 'href="' + original);
  //     this.table = fixed;
  //     console.log(this.table);
  //   });
  // }

  // load() {
  //   let links = [];
  //   let titles = [];
  //   var res;
  //   let original = this.Url;
  //   if (this.Url) {
  //     $.ajax({
  //       url: this.Url,
  //     }).done(function (data) {
  //       let result = $(data).filter("table").html();
  //       this.res = result

  //         //console.log(result);
  //       //let fixed = data.replaceAll('href="', 'href="' + original);
  //       //let a = $(fixed).n('a').attr('href');
  //       // console.log(a);
  //       // $(fixed).find("a").each( function(){
  //       //   links.push(this.href);
  //       // } )
  //       // $(fixed)
  //       //   .find('a')
  //       //   .each(function () {
  //       //     links.push(this.href);
  //           //titles.push(this.textContent);
  //         //});
  //     });
  //   }
  //   console.log(res);
  //   // this.links = links;
  //   // this.titles = titles;
  // }

  // ModalOpen(): void{
  //   Swal.fire({
  //     html: '<button class="btn btn-light waves-effect waves-light">Download</button>'
  //   })
  // }
}
