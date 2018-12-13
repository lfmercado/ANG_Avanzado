import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [],
  providers: [HeroesService]
})
export class HeroesComponent implements OnInit {
  public heroes:Heroe[] =[ ];
  constructor( private _heroesService: HeroesService,
               private router: Router) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(idx){
    this.router.navigate(['/heroe', idx]);
  }

}
