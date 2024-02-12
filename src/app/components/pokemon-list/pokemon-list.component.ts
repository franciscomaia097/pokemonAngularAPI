import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../../services/pokemonApi/pokemon-api.service';
import { Router } from '@angular/router';
import { PokemonStateService } from '../../services/pokemonState/pokemon-state.service';

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

  constructor(
    private pokemonApiService: PokemonApiService,
    private router: Router,
    private pokemonStateService: PokemonStateService
  ) {}

  ngOnInit(): void {
    this.pokemonStateService.currentPokemonState.subscribe((pokemons) => {
      this.pokemons = pokemons;
    });

    this.pokemonStateService.currentOffsetState.subscribe((offset) => {
      this.offset = offset;
    });

    this.loadAllPokemons();

    this.pokemonStateService.currentScrollPositionState.subscribe(
      (position) => {
        setTimeout(() => {
          window.scrollTo(0, position);
        }, 0);
      }
    );
  }

  loadAllPokemons(): void {
    this.pokemonApiService.getPokemons().subscribe((data) => {
      this.allPokemons = data;
      if (this.pokemons.length === 0) {
        this.loadMore();
      }
    });
  }

  loadMore(): void {
    const nextPokemons = this.allPokemons.slice(
      this.offset,
      this.offset + this.limit
    );
    this.pokemons = [...this.pokemons, ...nextPokemons];
    this.offset += this.limit;
    this.pokemonStateService.changePokemonState(this.pokemons);
    this.pokemonStateService.changeOffsetState(this.offset);
  }

  getImageUrl(id: number): string {
    return this.pokemonApiService.getImageUrl(id);
  }

  goToDetail(id: number) {
    this.pokemonStateService.changeScrollPositionState(window.pageYOffset);
    this.router.navigate(['/pokemon', id]);
  }

  onSearch(searchTerm: string): void {
    if (searchTerm) {
      this.pokemons = this.allPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.pokemons = this.allPokemons.slice(0, this.offset);
    }
  }
}
