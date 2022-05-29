import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Movies } from 'app/models/movies.model';
import { MOVIES } from 'data/movies';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  volunteerForm: FormGroup;
  movies: Movies[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.openForm();
  }
  openForm(): void {
    this.volunteerForm = this.formBuilder.group({
      movieTitle: "PROBA"
    });
  }
  onSave(): void{
    console.log(this.volunteerForm);
  }
}
