import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styles: []
})
export class BodyComponent implements OnInit {
  public mostrar:boolean;
  public list:any;
  frase:any = {
    mensaje: 'Un gran poder requiere una gran responsabilidad',
    autor: 'Ben Parker'
  };
  
  constructor() {
    this.mostrar = true;
    this.list = [    
    'Cras justo odio',
    'Dapibus ac facilisis in',
    'Morbi leo risus',
    'Porta ac consectetur ac',
    'Vestibulum at eros']
  
    
   }

  ngOnInit() {
  }
  ocultar(){
    if(this.mostrar == true){
       this.mostrar = false;
      }
    else{
      this.mostrar = true;
    }

    console.log(this.mostrar);
    
  }

}
