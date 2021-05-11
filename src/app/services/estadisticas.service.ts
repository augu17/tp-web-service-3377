import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { observable, Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "x-rapidapi-key": "6fc1f290d7msh099bffed46def86p1e7050jsn874fcaa7bd67",
	  "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
	  "useQueryString": "true"
  })
};

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  constructor(private _http:HttpClient) { }

  public estadisticas():Observable<any>{
    return this._http.get(`https://covid-19-tracking.p.rapidapi.com/v1`, httpOptions);
  }
  public buscarPais(text:string):Observable<any>{
    // return this._http.get(`https://covid-19-tracking.p.rapidapi.com/v1/${text}`, httpOptions);
    return this._http.get("https://covid-19-tracking.p.rapidapi.com/v1/"+text, httpOptions);
  }
}
