import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.css']
})
export class ConsolesComponent implements OnInit {

  constructor() { }

  activeSlide = 0;

  ngOnInit(): void {
  }

  nextSlide(): void{
    if (this.activeSlide === 2){
      this.activeSlide = 0;
    }
    else{
      this.activeSlide++;
    }
  }
}
