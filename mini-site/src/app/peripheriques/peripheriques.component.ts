import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { CarouselComponent } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-peripheriques',
  templateUrl: './peripheriques.component.html',
  styleUrls: ['./peripheriques.component.css']
})
export class PeripheriquesComponent implements OnInit{


  @Output() activate = new EventEmitter();

  constructor() {
  }

  activeSlide = 0;

  activePeripherique = 1;

  ngOnInit(): void {

    this.activate.emit(3);

  }
}
