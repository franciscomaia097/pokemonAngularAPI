import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PokemonApiService } from 'src/app/services/pokemonApi/pokemon-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-update',
  templateUrl: './pokemon-update.component.html',
  styleUrls: ['./pokemon-update.component.css'],
})
export class PokemonUpdateComponent implements OnInit {
  pokemon: any;

  updateForm!: FormGroup; // Declare updateForm without initializing it

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonApiService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')) || 0;
    this.pokemonService.getPokemon(id).subscribe((pokemon) => {
      this.pokemon = pokemon; // Update the pokemon object
      this.pokemon.image = this.pokemonService.getImageUrl(id); // Get the image URL
      this.updateForm = new FormGroup({
        name: new FormControl(pokemon.name),
        height: new FormControl(pokemon.height),
        weight: new FormControl(pokemon.weight),
        type: new FormControl(pokemon.type),
      });
    });
  }

  onSubmit(): void {
    console.warn(this.updateForm.value);
  }

  goBack(): void {
    this.location.back();
  }
}
