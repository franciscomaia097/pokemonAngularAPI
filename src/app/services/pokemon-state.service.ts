import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonStateService {
  private pokemonState = new BehaviorSubject<any[]>([]);
  private offsetState = new BehaviorSubject<number>(0);
  private scrollPositionState = new BehaviorSubject<number>(0);

  currentPokemonState = this.pokemonState.asObservable();
  currentOffsetState = this.offsetState.asObservable();
  currentScrollPositionState = this.scrollPositionState.asObservable();

  constructor() {}

  changePokemonState(pokemon: any[]) {
    this.pokemonState.next(pokemon);
  }

  changeOffsetState(offset: number) {
    this.offsetState.next(offset);
  }

  changeScrollPositionState(position: number) {
    this.scrollPositionState.next(position);
  }
}
