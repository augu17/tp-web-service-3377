import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { observable, Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "x-rapidapi-key": "6fc1f290d7msh099bffed46def86p1e7050jsn874fcaa7bd67",
    "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
    "useQueryString": "true"
  })
};

@Injectable({
  providedIn: 'root'
})

export class PeliculaService {

  constructor(private _http:HttpClient) {  }
  
  public listPeliculas(cadena:string):Observable<any>{
    console.log(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${cadena}`);
    return this._http.get(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${cadena}`, httpOptions);
  }
    
}
