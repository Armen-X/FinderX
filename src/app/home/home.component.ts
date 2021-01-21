import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as $ from 'jquery'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apikey = environment.apiKey;
  cx = environment.cx;
  query = 'intitle:"index.of" (mp4|avi|mkv|wmv|mpg|flv) "matrix" -html -htm -php -asp -jsp'
  searchValue: any;
  result: any;
  resultTitle: any;
  resultContent: any;
  resultDisplayLink: any;
  resultFroamttedURL: any;
  showDownloadBtn = false;

  constructor(private http: HttpClient,) { }

  ngOnInit() {
    // "https://www.alltheinternet.com/?q=intitle%3A%22index.of%22+%28mp4%7Cavi%7Cmkv%7Cwmv%7Cmpg%7Cflv%29+%22%22+-html+-htm+-php+-asp+-jsp&ref=01162021044400&p=""
  }

  startLoading(){
    $.ajax({
      url: "https://www.alltheinternet.com/?q=intitle%3A%22index.of%22+%28mp4%7Cavi%7Cmkv%7Cwmv%7Cmpg%7Cflv%29+%22%22+-html+-htm+-php+-asp+-jsp&ref=01162021044400&p=",
      headers : {header1 : "header1"}
      }).done(function(data) {
         $('#include-from-outside').html(data);
    });
    this.click();
  }
  startSecondpage(){
    //$('#include-from-outside2').load('https://www.startpage.com/sp/search');
    // $.ajax({
    //   url: "https://www.startpage.com/sp/search",
    //   headers : {header1 : "header1"}
    //   }).done(function(data) {
    //      $('#include-from-outside').html(data);
    // });
    $('a.logoarea').remove();
    $('.addext').remove();
    // var referrer = "https://www.alltheinternet.com/?q=intitle%3A%22index.of%22+%28mp4%7Cavi%7Cmkv%7Cwmv%7Cmpg%7Cflv%29+%22%22+-html+-htm+-php+-asp+-jsp&ref=01182021195820&p=";
    // $.ajax({
    //   url: "https://www.alltheinternet.com/?q=intitle%3A%22index.of%22+%28mp4%7Cavi%7Cmkv%7Cwmv%7Cmpg%7Cflv%29+%22%22+-html+-htm+-php+-asp+-jsp&start=10&page=2&tools=&SDate=&ref=01182021195847&area=",
    //   headers : {'Access-Control-Allow-Origin': '*'
    //     , 'Referer': referrer}
    //   }).done(function(data) {
    //      $('#include-from-outside').html(data);
    // });
    // $('#include-from-outside').load('https://www.alltheinternet.com/?q=intitle%3A%22index.of%22+%28mp4%7Cavi%7Cmkv%7Cwmv%7Cmpg%7Cflv%29+%22%22+-html+-htm+-php+-asp+-jsp&start=10&page=2&tools=&SDate=&ref=01182021195847&area=')
  }
  click(){
    setTimeout(function(){
      $('#include-from-outside > div:nth-child(43)').remove();
      $('#include-from-outside > div.sitewidth > div:nth-child(1) > h1').remove();
      $('button.pagebuttons').remove();
      $('div.allborderbox').remove();
      $('a.logoarea').remove();
      $('.addext').remove();
      $("a.result_t").css("color","white");
      $("div.result_abstract").remove();
      $("cite").remove();
      $("span.web_box").remove();
      $('.result_t').css('border-style', "solid");
      $('.result_t').css('padding', "5px");
      $('div>span').remove();
      $("div[style='vertical-align:top']").remove()
      $('footer').remove();
      },1000)
      // $("#iframe-id").contents().find("div")
      //   .append($("<style type='text/css'>  .my-class{display:none;}  </style>"));
      //$("iframe").contents().find("#page-container").css("display", "none");
      //$("#iframe-id").contents().find("img").attr("style","width:100%;height:100%")
  }

}
