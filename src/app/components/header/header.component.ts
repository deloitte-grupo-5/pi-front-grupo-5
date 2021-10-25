import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showDropdown = false;
  showSearch = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown(){
    this.showDropdown = !this.showDropdown;
  }

  toggleSearch(){
    this.showSearch = !this.showSearch;
  }  
}
