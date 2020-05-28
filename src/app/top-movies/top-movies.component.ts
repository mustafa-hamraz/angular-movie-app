import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css']
})
export class TopMoviesComponent implements OnInit {
  top_movies;

  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
    this._movieService.getTopMovies().subscribe(data => {this.top_movies = data;})
  }

  sendId(id){
    this._movieService.saveMovieId(id);
  }
}
