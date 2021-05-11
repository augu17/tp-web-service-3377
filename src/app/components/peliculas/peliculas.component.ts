import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  pelicula: Pelicula;
  peliculas: Array<Pelicula>;
  nomPelicula: string = "";
  popup: string = "https://i.imgur.com/illXjCi.jpeg";

  constructor(private PeliculaService: PeliculaService) {
    this.pelicula = new Pelicula;
    this.peliculas = new Array<Pelicula>();
  }

  ngOnInit(): void {
    this.PeliculaService.listPeliculas("sharknado").subscribe(
      (result) => {
        this.peliculas = new Array<Pelicula>();
        result['titles'].forEach((element: any) => {
          this.pelicula = new Pelicula();
          Object.assign(this.pelicula, element);
          this.peliculas.push(this.pelicula);
        });
        console.log(this.peliculas);
      }
    )
  }

  public cargarPeliculas() {
    this.PeliculaService.listPeliculas(this.nomPelicula).subscribe(
      (result) => {
        this.peliculas = new Array<Pelicula>();
        result['titles'].forEach((element: any) => {
          this.pelicula = new Pelicula();
          Object.assign(this.pelicula, element);
          this.peliculas.push(this.pelicula);
        });
        console.log(this.peliculas);
      }
    )
  }
}
