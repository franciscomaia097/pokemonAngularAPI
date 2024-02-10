import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../../services/pokemon-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  allPokemons: any[] = [];
  pokemons: any[] = [];
  limit: number = 12;
  offset: number = 0;

  constructor(private pokemonApiService: PokemonApiService) {}

  ngOnInit(): void {
    this.loadAllPokemons();
  }

  loadAllPokemons(): void {
    this.pokemonApiService
      .getPokemons()
      .subscribe((data) => {
        this.allPokemons = data;
        this.loadMore();
      });
  }

  loadMore(): void {
    const nextPokemons = this.allPokemons.slice(this.offset, this.offset + this.limit);
    this.pokemons = [...this.pokemons, ...nextPokemons];
    this.offset += this.limit;
  }

  getImageUrl(id: number): string {
    return this.pokemonApiService.getImageUrl(id);
  }
}
