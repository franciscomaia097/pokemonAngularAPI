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

  onSubmit(): void {
    if (this.pokemonName) {
      console.log(`Added Pokemon: ${this.pokemonName}`);
      this.pokemonName = '';
      this.pokemonWeight = 0;
      this.pokemonHeight = 0;
      this.pokemonType = '';
      this.pokemonImageUrl = '';
    }
  }

  onBackClick(): void {
    this.router.navigate(['/']);
  }
}
