import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';



@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {

  movies;
  constructor(private _movieService: MovieService) {}

  ngOnInit(): void {
    this._movieService.getPopularMovies().subscribe(data => {this.movies = data;});
  }

  sendId(id){
    this._movieService.saveMovieId(id);
  }
  
}
