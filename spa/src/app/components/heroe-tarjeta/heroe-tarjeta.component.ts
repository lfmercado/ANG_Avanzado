import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() public heroe:any;
  @Input() public index:number;
  @Output() heroeSeleccionado:EventEmitter<number>
  constructor( private _router:Router) {
    this.heroe = {};
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {  
  }
  verHeroe(){
    this.heroeSeleccionado.emit(this.index);
    console.log(this.index);
    this._router.navigate(['/heroe', this.index]);
  }

}
