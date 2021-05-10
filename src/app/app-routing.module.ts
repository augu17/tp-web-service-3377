import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { TraductorComponent } from "./components/traductor/traductor.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { CotizacionComponent } from "./components/cotizacion/cotizacion.component";
import { EstadisticasComponent } from "./components/estadisticas/estadisticas.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
 { path: 'traductor', component: TraductorComponent },
 { path: 'peliculas', component: PeliculasComponent },
 { path: 'cotizacion', component: CotizacionComponent },
 { path: 'estadisticas', component: EstadisticasComponent },
 { path: '**', pathMatch:'full',redirectTo:'home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
