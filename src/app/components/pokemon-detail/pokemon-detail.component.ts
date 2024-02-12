import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonApiService } from '../../services/pokemon-api.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    public pokemonService: PokemonApiService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.pokemonService.getPokemon(+id).subscribe((pokemon) => {
        this.pokemon = pokemon;
      });
    }
  }

  getImageUrl(id: number): string {
    return this.pokemonService.getImageUrl(id);
  }

  goBack() {
    this.router.navigate(['/pokemon']);
  }

  deletePokemon(id: number) {
    this.pokemonService.deletePokemon(id).subscribe(() => {
      this.router.navigate(['/pokemon']);
    });
  }

  updatePokemon(id: number) {
    this.router.navigate(['/pokemon', id, 'update']);
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
}
