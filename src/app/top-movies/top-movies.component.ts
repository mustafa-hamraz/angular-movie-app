import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css']
})
export class TopMoviesComponent implements OnInit {
  top_movies;

  

  constructor(private movieService: MovieService, private appComponent: AppComponent) { }

  ngOnInit(): void {
    this.appComponent.search_box_in_nav = true;
    this.movieService.getTopMovies().subscribe(data => {this.top_movies = data;})
  }

  sendId(id){
    this.movieService.saveMovieId(id);
  }

  pageButton(page: number){
    this.movieService.getPage('top_rated', page).subscribe(data => {this.top_movies = data;});
  }
}
