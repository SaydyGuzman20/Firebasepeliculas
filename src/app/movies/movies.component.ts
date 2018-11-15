import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies = null;
  movie: any = {};

  constructor(private movieService:MoviesService) { 
    this.movies = movieService.getMovies();

  }

  ngOnInit() {
  }

  createMovie() {
    this.movie.id = Date.now();
    this.movieService.createMovie(this.movie);
  }


  cleanForm() {

    this.movie = {};

  }
}
