import { Component, OnInit } from '@angular/core';
import { Location }   from '@angular/common';

@Component({
  selector: 'app-ready',
  templateUrl: './ready.component.html',
  styleUrls: ['./ready.component.css']
})
export class ReadyComponent implements OnInit {

  constructor(location: Location) { }

  ngOnInit() {
  }

  prefix = '';
  url = '';

  generate() {
    console.log('generate!!!');
    var wTel = this.prefix;
    //10進数の場合
    wTel = wTel.replace(/[Ａ-Ｚａ-ｚ０-９ー]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
    });

    //16進数の場合
    wTel = wTel.replace(/[Ａ-Ｚａ-ｚ０-９ー]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });

    wTel = wTel.replace( /[‐－―]/g , '' );
    this.url = location.origin  + "/generate/" + wTel;
  }
}
