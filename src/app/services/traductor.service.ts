import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { observable, Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "x-rapidapi-key": "6fc1f290d7msh099bffed46def86p1e7050jsn874fcaa7bd67",
	  "x-rapidapi-host": "nlp-translation.p.rapidapi.com",
	  "useQueryString": "true"
  })
};

@Injectable({
  providedIn: 'root'
})

export class TraductorService {

  constructor(private _http:HttpClient) { }

  public traducir(text:string,to:string,from:string):Observable<any>{
    return this._http.get(`https://nlp-translation.p.rapidapi.com/v1/translate/?text=${text}&to=${to}&from=${from}`, httpOptions);
  }
}
