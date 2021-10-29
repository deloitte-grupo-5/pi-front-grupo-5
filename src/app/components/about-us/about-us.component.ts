import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  images = [{
    path: "https://i.imgur.com/Nq1eTHz.png"
  },{
    path: "https://i.imgur.com/kOnJpM4.png"
  },{
    path: "https://i.imgur.com/N21L2BY.png"
  },{
    path: "https://i.imgur.com/na1r1jz.png"
  },{
    path: "https://i.imgur.com/6F1lWMD.png"
  },{
    path: "https://i.imgur.com/9gcc94e.png"
  },{
    path: "https://i.imgur.com/Qjg5qeK.png"
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
