import { Component, OnInit } from '@angular/core';
import { Traductor } from 'src/app/models/traductor';
import { TraductorService} from 'src/app/services/traductor.service';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css']
})
export class TraductorComponent implements OnInit {

  traductor: Traductor;
  texto: string = "";
  to: string = "";
  from: string = "";
  espanol : string="https://i.imgur.com/axs66SL.jpeg";
  ingles : string="https://i.imgur.com/J4cOsFO.jpg";
  italiano : string="https://i.imgur.com/Uvl2NRB.jpg";
  frances : string="https://i.imgur.com/FVeKkJa.jpg";

  constructor(private TraductorService: TraductorService) {
    this.traductor = new Traductor;
   }

  ngOnInit(): void {
  }
  public traducirTexto(){
    this.TraductorService.traducir(this.texto,this.to,this.from).subscribe(
      (result) => {
          this.traductor = new Traductor();
          this.traductor.text = this.texto;
          this.traductor.to = this.to;
          this.traductor.from = this.from;
          this.traductor.text2 = result['translated_text'][this.to];
        console.log(this.traductor);
      }
    )
  }
  public de(entrada:string){
    this.from = entrada;
  }
  public a(entrada2:string){
    this.to = entrada2;
  }
}
