import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  heroe:any= {};
  constructor(private activateRoute:ActivatedRoute,
              private _heroeServices: HeroesService) {
    this.activateRoute.params.subscribe(params => {
      this.heroe = this._heroeServices.getHeroe(params['id']);
      console.log(this.heroe);
    });
   }

  ngOnInit() {
  }

}
