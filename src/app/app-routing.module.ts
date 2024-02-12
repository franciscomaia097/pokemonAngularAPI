import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PokemonUpdateComponent } from './components/pokemon-update/pokemon-update.component';
import { ExtraOptions } from '@angular/router';

const routes: Routes = [
  { path: 'pokemon/:id/update', component: PokemonUpdateComponent },
  { path: '', redirectTo: '/pokemon', pathMatch: 'full' },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
  { path: 'pokemon', component: PokemonListComponent },
  { path: '**', component: PageNotFoundComponent },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64], // [x, y]
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
