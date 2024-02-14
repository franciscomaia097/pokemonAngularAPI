import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css'],
})
export class AddPokemonComponent {
  constructor(private router: Router) {}
  pokemonName: string = '';
  pokemonWeight: number = 0;
  pokemonHeight: number = 0;
  pokemonType: string = '';
  pokemonImageUrl: string = '';
  message: string = '';

  onSubmit(): void {
    let isPokemonAdded = this.pokemonName ? true : false;

    if (isPokemonAdded) {
      let pokemonData = {
        name: this.pokemonName,
        weight: this.pokemonWeight,
        height: this.pokemonHeight,
        type: this.pokemonType,
        imageUrl: this.pokemonImageUrl,
      };
      localStorage.setItem(this.pokemonName, JSON.stringify(pokemonData));
      this.pokemonName = '';
      this.pokemonWeight = 0;
      this.pokemonHeight = 0;
      this.pokemonType = '';
      this.pokemonImageUrl = '';
    }

    this.message = isPokemonAdded
      ? 'Pokemon has been added successfully!'
      : 'Failed to add Pokemon. Please try again.';
  }

  onBackClick(): void {
    this.router.navigate(['/']);
  }
}
