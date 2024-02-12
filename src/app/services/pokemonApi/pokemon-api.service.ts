import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  private apiUrl = 'https://softwium.com/api/pokemons';

  constructor(private http: HttpClient) {}

  //get a list of all pokemons
  getPokemons(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  //get a spefic pokemon by id
  getPokemon(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getImageUrl(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  //delete a pokemon by id
  deletePokemon(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
