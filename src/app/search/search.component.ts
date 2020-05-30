import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { MovieService } from '../movie.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResult;
  searchTerm;

  constructor(private movieService: MovieService, private appComponent: AppComponent) { }

  ngOnInit(): void {
    this.appComponent.search_box_in_nav = false;
    this.search(this.appComponent.userSearchInput);
  }

  search(userInput){
    if(userInput.lenght != 0){
      this.searchTerm = userInput.trim().split(' ').join('+')
      this.movieService.searchMovies(this.searchTerm).subscribe(data => {this.searchResult = data;});
    }
    
  }

  sendId(id){
    this.movieService.saveMovieId(id);
  }

  /*movies$;
  private searchTerms = new Subject<string>();

  constructor(private movieService: MovieService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.movies$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.movieService.searchMovies(term)),
    );
  }*/

}
