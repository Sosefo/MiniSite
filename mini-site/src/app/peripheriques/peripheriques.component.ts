import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { CarouselComponent } from 'ngx-bootstrap/carousel';

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
}
