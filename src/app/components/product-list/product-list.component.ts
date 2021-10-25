import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  viewDetails = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(){
    this.viewDetails = true;
  }

  closeDetails(){
    this.viewDetails = false;
  }
}
