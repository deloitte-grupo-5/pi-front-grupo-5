
import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  showDropdown = false;
  showSearch = false;
  rangeProducts: any;
  usuarioLogado:any = {};
  usuarioLogou = false;

  constructor(private service: CartService, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.onlogoff.subscribe((resp)=>{
      this.usuarioLogado = {}
      this.usuarioLogou= false;
    })

    this.userService.onlogar.subscribe((resp) => {
      this.usuarioLogado = resp;
      this.usuarioLogou = true;
    });

    this.service
      .getProducts()
      .subscribe((resp) => (this.rangeProducts = resp.length));
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }
  logout(){
    this.userService.logout();
  }

}
