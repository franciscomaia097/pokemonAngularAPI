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


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonTypeComponent,
    PageNotFoundComponent,
    PokemonUpdateComponent,
    TypeFormatterPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
