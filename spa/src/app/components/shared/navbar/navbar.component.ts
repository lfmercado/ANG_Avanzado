import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor( private _routerNavigate:Router) { }

  ngOnInit() {
  }

  buscarHeroe(value:string){
    console.log(value); 
     this._routerNavigate.navigate(['buscar-heroe/' + value])
  } 

}
