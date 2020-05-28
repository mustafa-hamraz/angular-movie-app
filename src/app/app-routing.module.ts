import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  {path: 'popular', component: PopularMoviesComponent },
  {path: 'top-rated', component: TopMoviesComponent },
  {path: 'detail', component: DetailComponent },
  {path: 'search', component: SearchComponent },
  {path: '', redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
