import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { CarouselComponent } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-peripheriques',
  templateUrl: './peripheriques.component.html',
  styleUrls: ['./peripheriques.component.css']
})
export class PeripheriquesComponent implements OnInit,AfterViewInit{


  constructor() {
  }

  @ViewChild('slide1')
  slide1: CarouselComponent;
  @ViewChild('slide2')
  slide2: CarouselComponent;
  @ViewChild('slide3')
  slide3: CarouselComponent;
  @ViewChild('slide4')
  slide4: CarouselComponent;

  activeSlide = 0;

  activePeripherique = 1;

  ngOnInit(): void {


  }

  ngAfterViewInit(): void {
    this.slide2.pause();
    this.slide3.pause();
    this.slide4.pause();

  }

  changeActivePeripherique(peripherique: number): void{
    this.activePeripherique = peripherique;

    if (peripherique === 1){
      this.slide1.play();
      this.slide2.pause();
      this.slide3.pause();
      this.slide4.pause();
    }
    else if (peripherique === 2){
      this.slide2.play();
      this.slide1.pause();
      this.slide3.pause();
      this.slide4.pause();
    }
    else if (peripherique === 3){
      this.slide3.play();
      this.slide1.pause();
      this.slide2.pause();
      this.slide4.pause();
    }
    else {
      this.slide4.play();
      this.slide1.pause();
      this.slide2.pause();
      this.slide3.pause();
    }
  }
}
