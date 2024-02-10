import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonUpdateComponent } from './pokemon-update.component';

describe('PokemonUpdateComponent', () => {
  let component: PokemonUpdateComponent;
  let fixture: ComponentFixture<PokemonUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonUpdateComponent]
    });
    fixture = TestBed.createComponent(PokemonUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
