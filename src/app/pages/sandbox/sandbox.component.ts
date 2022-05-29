import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {
  title = "Title";
  count = 0;
  
  counter(type:string) {
    type ==='add' ?this.count++:this.count--
  }

  constructor() { }

  ngOnInit(): void {
  }

}
