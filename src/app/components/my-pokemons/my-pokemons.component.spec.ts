import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPokemonsComponent } from './my-pokemons.component';

describe('MyPokemonsComponent', () => {
  let component: MyPokemonsComponent;
  let fixture: ComponentFixture<MyPokemonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPokemonsComponent]
    });
    fixture = TestBed.createComponent(MyPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
