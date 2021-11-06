import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(100%)'}),
        animate('500ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({transform: 'translateY(100%)'}))
      ])
    ])
  ]
})
export class CookiesComponent implements OnInit {
  cookies = true;

  constructor() {
    let dados = window.sessionStorage.getItem("cookie")
    if(dados){
      this.cookies = false
    }
  }

  ngOnInit(): void {
  }

  aceitar(){
    window.sessionStorage.setItem("cookie", "aceito")
    this.cookies = false;
  }
}