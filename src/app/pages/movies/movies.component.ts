import { Component, OnInit } from '@angular/core';
import { Movies } from 'app/models/movies.model';
import { MoviesService } from 'app/services/movies.service';
import { Sortings } from 'app/sortings';
import { FormsModule } from '@angular/forms';
import { throws } from 'assert';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { parse } from 'path';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movies[] = [];
  showMe:boolean = false
  display = "none";
  movieTitle:string;
  toggleButton: boolean = true;
  order: boolean;
  titlesToUpdate: [] = [];
  input1:string;
  isDesc: boolean;
  displayVal:string;
  sortingsName:Sortings[];
  sortSelected: string;
  updateItem:any;
  openform= false;





 


  constructor(private movieService: MoviesService) { 
  }
  ngOnInit(): void {
    this.getMovies();
    if (this.sortSelected = "rating") {
      this.proba1();
    };

  }

  proba1(){
    if(this.sortSelected) {
        let newarr = this.movies.sort((a,b) => b.rating - a.rating);
        this.movies = newarr;
    }
  }



  getMovies(): void {
    this.movieService.getMovies()
    .subscribe(x => 
      {
        console.log(x);
        this.movies = x
      })
  }
  deleteRow(id:number){
    let index = this.movies.findIndex(e => e.id == id);
    if ( index !== -1) {
      this.movies.splice(index,1);
    }
  }




  onCloseHandled(val:string) {
    console.log(val);
    if(val.length === 0){
      alert("You did not filled the input field!")
      console.log("No input added.")
      this.display;
    }
    else {
      this.displayVal=val;
      this.display = "none";
    }
  }

  proba(val:string,id:number){
    let index = this.movies.findIndex(x => x.id ===id);
    console.log(this.movies[index]);
    if ( index !== -1 && val.length != 0 ) {
      console.log(index);
      console.log(this.movies[index])
      this.movies[index].title = val ;
      console.log(this.movies[index].title);
      this.openform = false;
    }
    else {
      alert("No input added!");
    }

  }
  onClickOpenForm(id:number){
    let index = this.movies.findIndex(e => e.id === id);
    if ( index !== -1) {
      this.openform = true;
      console.log(this.movies[index]);
      this.movieTitle = this.movies[index].title;

    }
    else{
      
    }
    
  }


  sort(){
    switch(this.sortSelected) {
      case "title":
        if(this.isDesc) {
          this.movies.sort((a, b) => (a.title > b.title) ? 1 : -1);
        }
        else {
          this.movies.sort((a, b) => (b.title > a.title) ? 1 : -1);
        }
        this.isDesc = !this.isDesc;
         console.log("Title Sorted")
         break;
      case "rating":
        if(this.order) {
          let newarr = this.movies.sort((a,b) => b.rating - a.rating);
          this.movies = newarr;
        }
        else {
          let newarr = this.movies.sort((a,b) => a.rating - b.rating);
          this.movies = newarr;
        }
        this.order = !this.order;
        console.log(this.movies)
        console.log("Rating Sorted")
        break;
      case "year": 
      if(this.order) {
        let newarr = this.movies.sort((a,b) => a.year - b.year);
        this.movies = newarr;
      }
      else {
        let newarr = this.movies.sort((a,b) => b.year - a.year);
        this.movies = newarr;
      }
      this.order = !this.order;
      console.log(this.movies)
        console.log("Year Sorted")
        break;
    }

  }



}
