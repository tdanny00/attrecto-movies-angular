import { Injectable } from '@angular/core';
import { Movies } from 'app/models/movies.model';
import { MOVIES } from 'data/movies';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { 

  }
  getMovies(): Observable<Movies[]>{
    const movies = of(MOVIES);
    return movies;
  }
}
