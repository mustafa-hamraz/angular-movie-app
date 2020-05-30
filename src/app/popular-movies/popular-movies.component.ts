import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { AppComponent } from '../app.component';



@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {

  movies;
  constructor(private movieService: MovieService, private appComponent: AppComponent) {}

  ngOnInit(): void {
    this.appComponent.search_box_in_nav = true;
    this.movieService.getPopularMovies().subscribe(data => {this.movies = data;});
  }

  sendId(id){
    this.movieService.saveMovieId(id);
  }

  pageButton(page: number){
    this.movieService.getPage('popular', page).subscribe(data => {this.movies = data;});
  }
  
}
