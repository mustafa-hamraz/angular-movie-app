import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { MovieService } from '../movie.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  details;

  constructor(private _movieService: MovieService, private location: Location) { }

  ngOnInit(): void {
    this._movieService.getMovieById().subscribe(data => {this.details = data;});
  }

  goBack(){
    this.location.back();
  }
}
