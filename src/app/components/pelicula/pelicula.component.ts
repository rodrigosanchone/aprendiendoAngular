import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import {Pelicula} from '../../models/pelicula'

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  
  @Input() pelicula; 
  @Output() MarcarFavorita = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(event, pelicula){
    console.log(event)
    console.log(pelicula)
    this.MarcarFavorita.emit({
      pelicula: pelicula
    })
  }

}
