import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as actions from '../contador.actions';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html'
})
export class HijoComponent implements OnInit {

  contador: number;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador')
    .subscribe(contador => this.contador = contador);
  }
  
  dividir() {
    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.dividir({numero:2}))
  }

  multiplicar() {
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.multiplicar({numero:2}));
  }


  // resetNieto(nuevoContador){
  //   // this.contador = nuevoContador;
  //   // this.cambioContador.emit(this.contador);
  // }

}
