import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-peripheriques',
  templateUrl: './peripheriques.component.html',
  styleUrls: ['./peripheriques.component.css']
})
export class PeripheriquesComponent implements OnInit{


  constructor() {
  }

  activeSlide = 0;

  activePeripherique = 1;

  ngOnInit(): void {

  }

  changeActivePeripherique(peripherique: number): void{
    console.log(peripherique);
    this.activePeripherique = peripherique;
  }

  nextSlide(): void{
    if (this.activeSlide === 1){
      this.activeSlide = 0;
    }
    else{
      this.activeSlide++;
    }
  }




}
