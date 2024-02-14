import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  searchTerm: string = '';
  showLoginForm: boolean = false;

  @Output() search = new EventEmitter<string>();
  @Output() addPokemon = new EventEmitter<void>();

  constructor(private router: Router, private authService: AuthService) {}

  onLoginClick(): void {
    this.router.navigate(['/login']);
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  onAddPokemonClick(): void {
    this.router.navigate(['/add-pokemon']);
  }

  onMyPokemonsClick(): void {
    this.router.navigate(['/my-pokemons']);
  }
}
