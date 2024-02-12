import { Component } from '@angular/core';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent {
  pokemonName: string = '';

  onSubmit(): void {
    if (this.pokemonName) {
      // Add your logic for adding a Pokemon here
      console.log(`Added Pokemon: ${this.pokemonName}`);
      this.pokemonName = '';
    }
  }
}
