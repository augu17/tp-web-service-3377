import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Estadisticas } from 'src/app/models/estadisticas';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  planeta: string = "https://w7.pngwing.com/pngs/42/302/png-transparent-earth-drawing-earth.png";
  usa: string = "http://banderasmundo.es/banderas/estados-unidos.png";
  india: string = "https://www.banderas-mundo.es/data/flags/w580/in.png";
  brasil: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/300px-Flag_of_Brazil.svg.png";
  francia: string = "https://i.imgur.com/FVeKkJa.jpg";
  texto: string = "";
  estadisticas: Estadisticas;
  vector_Estadisticas: Array<Estadisticas> = [];
  casos: boolean = true;
  curados: boolean = true;
  fallecidos: boolean = true;


  constructor(private EstadisticasService: EstadisticasService) {
    this.estadisticas = new Estadisticas;
    this.vector_Estadisticas = new Array<Estadisticas>();
  }
  public buscandoPais() {
    this.EstadisticasService.buscarPais(this.texto).subscribe(
      (result) => {
        this.estadisticas = new Estadisticas();
        this.vector_Estadisticas = new Array<Estadisticas>();
        this.estadisticas.nombre = result['Country_text'];
        this.estadisticas.casos = result['Total Cases_text'];
        this.estadisticas.imagen = this.cargarBandera(this.estadisticas.nombre as string);
        this.estadisticas.curados = result['Total Recovered_text'];
        this.estadisticas.fallecidos = result['Total Deaths_text'];
        this.vector_Estadisticas.push(this.estadisticas);

        // console.log(this.estadisticas);
        console.log(this.vector_Estadisticas);
      }
    )
  }
  public arbitro() {
    if (this.texto == "Todos") {
      this.cargarPaisesIniciales();
    }
    else {
      this.buscandoPais();
    }
  }
  public cargarPaisesIniciales() {
    this.vector_Estadisticas = [];
    this.EstadisticasService.estadisticas().subscribe(
      (result) => {
        for (let i = 0; i < 5; i++) {
          this.estadisticas = new Estadisticas();
          this.estadisticas.nombre = result[i]['Country_text'];
          this.estadisticas.casos = result[i]['Total Cases_text'];
          this.estadisticas.imagen = this.cargarBandera(result[i]['Country_text']);
          this.estadisticas.curados = result[i]['Total Recovered_text'];
          this.estadisticas.fallecidos = result[i]['Total Deaths_text'];
          this.vector_Estadisticas.push(this.estadisticas);
        }
        console.log(this.vector_Estadisticas);
      }
    )
  }
  public cargarBandera(pais: string) {
    switch (pais) {
      case "World": {
        return this.planeta;
        break;
      }
      case "USA": {
        return this.usa;
        break;
      }
      case "Brazil": {
        return this.brasil; 
        break;
      }
      case "India": {
        return this.india;
        break;
      }
      case "France": {
        return this.francia;
        break;
      }
      default: {
        return "";
        break;
      }
    }
  }

  ngOnInit(): void {
    this.cargarPaisesIniciales();
  }

}
