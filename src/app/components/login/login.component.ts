import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:string="";
  senha:string="";
  constructor(private service:ProductService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.service.login(this.usuario,this.senha).subscribe((token)=>{
      console.log(token)
      this.router.navigateByUrl("/produtos")
    });
  }

}
