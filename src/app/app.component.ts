import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-movie';

  popular_link_selected: boolean = true;
  top_rated_link_selected: boolean = false;

  linkClick(clicked){
    if(clicked == 'popular'){
      this.popular_link_selected = true;
      this.top_rated_link_selected = false;
    }else if(clicked == 'top_rated'){
      this.popular_link_selected = false;
      this.top_rated_link_selected = true;
    }else{
      this.popular_link_selected = false;
      this.top_rated_link_selected = false;
    }
  }

  userSearchInput: string;
  search_box_in_nav: boolean = false;

  searchBotton(input): void {
    this.search_box_in_nav = false;
    this.userSearchInput = input;
  }
}
