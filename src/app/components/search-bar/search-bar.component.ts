import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  searchTerm: string = '';
  showLoginForm: boolean = false;
  isLoggedIn: boolean = false;

  @Output() search = new EventEmitter<string>();
  @Output() addPokemon = new EventEmitter<void>();

  constructor(private router: Router) {}

  onLoginClick(): void {
    this.router.navigate(['/login']);
  }

  onAddPokemonClick(): void {
    this.addPokemon.emit();
  }
}
