import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router'
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styles: []
})
export class BuscarHeroeComponent implements OnInit {
  public heroes;
  public name;
  public res;
  constructor(private _heroesService:HeroesService,
              private _route:ActivatedRoute,
              private _router:Router) { }

  ngOnInit() {
    this._route.params.subscribe(
      params =>{
        this.name = params['name'];  
      }
    );
    this._route.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroes(params['name']);
    console.log(this.heroes);

    if(this.heroes.length <= 0) this.res = true;
    else this.res = false;
    console.log(this.res);
    });
    
  }
  buscarHeroeName(value){
    let id = this._heroesService.getHeroeName(value); 
    this.verHeroe(id.position);

  }

  verHeroe(idx){
    this._router.navigate(['/heroe', idx]);
  }

}
