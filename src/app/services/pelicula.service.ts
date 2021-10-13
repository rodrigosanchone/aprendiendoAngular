import {Injectable} from '@angular/core'; // primero importo el imjectable
import {Pelicula} from '../models/pelicula';

@Injectable()
export class PeliculaService{

public peliculas: Pelicula[];

constructor(){
    this.peliculas= [
        new Pelicula("Spiderman",2000,"https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Spider-Man2002Poster.jpg/220px-Spider-Man2002Poster.jpg"),
        new Pelicula("Ironman",2007,"https://www.ecartelera.com/carteles/1700/1773/001_m.jpg"),
        new Pelicula("EndGame",2020,"https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"),
        new Pelicula("Vengadores",2012,"https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"),
      ]
}

    holaMundo(){
        return 'Hola mundo desde un servicio de Angular';
    }

    getPeliculas(){
        return this.peliculas
    }
}