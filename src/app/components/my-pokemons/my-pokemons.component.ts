import { Component } from '@angular/core';

@Component({
  selector: 'app-my-pokemons',
  templateUrl: './my-pokemons.component.html',
  styleUrls: ['./my-pokemons.component.css'],
})
export class MyPokemonsComponent {
  pokemons: any[] = [];
  showForm = false;
  pokemonToUpdate: any = {};

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.pokemons = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key !== null) {
        let item = localStorage.getItem(key);
        if (item !== null) {
          let value = JSON.parse(item);
          this.pokemons.push(value);
        }
      }
    }
  }

  deletePokemon(name: string): void {
    localStorage.removeItem(name);
    this.loadPokemons();
  }
}
