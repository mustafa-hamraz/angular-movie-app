import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apikey =  "dc90245d5983098aab369cae5a207aee";
  movieId;

  constructor(private http: HttpClient) {}

  getPopularMovies(){
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key="+ this.apikey);
  }
  
  getTopMovies(){
    return this.http.get("https://api.themoviedb.org/3/movie/top_rated?api_key="+ this.apikey);
  }

  saveMovieId(id){
    this.movieId = id;
  }

  getMovieById(){
    return this.http.get("https://api.themoviedb.org/3/movie/"+ this.movieId +"?api_key="+ this.apikey);
  }

  searchMovies(term){
  return this.http.get("https://api.themoviedb.org/3/search/movie?api_key="+ this.apikey + "&query=" + term);
  }

  getPage(pageContainet: string, pageNumber: number){
    return this.http.get("https://api.themoviedb.org/3/movie/"+pageContainet+"?api_key="+ this.apikey + "&page="+pageNumber);
  }
}
