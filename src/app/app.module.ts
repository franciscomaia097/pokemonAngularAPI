import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/main/app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonTypeComponent } from './components/pokemon-type/pokemon-type.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PokemonUpdateComponent } from './components/pokemon-update/pokemon-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TypeFormatterPipe } from './pipes/type-formatter.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AddPokemonComponent } from './components/add-pokemon/add-pokemon.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { MyPokemonsComponent } from './components/my-pokemons/my-pokemons.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonTypeComponent,
    PageNotFoundComponent,
    PokemonUpdateComponent,
    TypeFormatterPipe,
    HighlightDirective,
    SearchBarComponent,
    LoginFormComponent,
    AddPokemonComponent,
    MyPokemonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
