import {Component} from '@angular/core';


@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html' 
      
})



export class Micomponente{

    public titulo:string;
    public comentario:string;
    public year:number;


    constructor(){
        this.titulo ="Hola mundo , soy Mi Componente";
        this.comentario= "Este es mi primer componente";
        this.year= 2020;
        console.log("Componente , mi componente cargado!!")
    }
}