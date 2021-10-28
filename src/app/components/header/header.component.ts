import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showDropdown = false;
  showSearch = false;
  rangeProducts:any;

  constructor(private service:CartService) { }

  ngOnInit(): void {

    this.service.getProducts().subscribe(
      (resp)=> this.rangeProducts = resp.length
    )
  }

  toggleDropdown(){
    this.showDropdown = !this.showDropdown;
  }

  toggleSearch(){
    this.showSearch = !this.showSearch;
  }


}
