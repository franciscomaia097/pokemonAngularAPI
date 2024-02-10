import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.css'],
})
export class PokemonTypeComponent {
  @Input() type!: string;
}
