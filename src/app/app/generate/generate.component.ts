import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}
  prefix = '';
  private sub: any;

  tel = '';
  fixtel = '';

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.prefix = params['prefix'];
    });
  }

  generate() {
    console.log('generate!!!');
    let wTel = this.tel;
    // 10進数の場合
    wTel = wTel.replace(/[Ａ-Ｚａ-ｚ０-９ー]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
    });

    // 16進数の場合
    wTel = wTel.replace(/[Ａ-Ｚａ-ｚ０-９ー]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });

    wTel = wTel.replace( /[-‐－―]/g , '' );
    this.fixtel = this.prefix + wTel;
  }
}
