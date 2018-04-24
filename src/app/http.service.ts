import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  getPokemon(pkmnId) {
    const data = `https://pokeapi.co/api/v2/pokemon/${pkmnId}/`
    return this._http.get(data);
  }
}
