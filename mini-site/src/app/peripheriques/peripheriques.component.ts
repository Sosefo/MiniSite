import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-peripheriques',
  templateUrl: './peripheriques.component.html',
  styleUrls: ['./peripheriques.component.css']
})
export class PeripheriquesComponent implements OnInit,AfterViewInit{


  constructor() {
  }

  activeSlide;
  ngAfterViewInit(): void {

  }
  ngOnInit(): void {

  }

  nextSlide(): void{
    if(this.activeSlide === 1){
      this.activeSlide = 0;
    }
    else{
      this.activeSlide++;
    }
  }




}
