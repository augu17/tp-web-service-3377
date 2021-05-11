import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TraductorComponent } from './components/traductor/traductor.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxDataTableModule} from "angular-9-datatable";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TraductorComponent,
    PeliculasComponent,
    CotizacionComponent,
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxDataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
