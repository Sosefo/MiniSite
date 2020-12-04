import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { CarouselComponent } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-peripheriques',
  templateUrl: './peripheriques.component.html',
  styleUrls: ['./peripheriques.component.css']
})
export class PeripheriquesComponent implements OnInit{

  @ViewChild('navbarPeripheriques')
  navbarConsoles: ElementRef;

  @ViewChild('navbarPeripheriquesCollapse')
  navbarConsolesCollapse: ElementRef;

  displayedNavBar: boolean;

  constructor() {
  }

  activeSlide = 0;

  activePeripherique = 1;

  ngOnInit(): void {
    this.displayedNavBar = false;
  }

  displayNav(): void {
    this.displayedNavBar = !this.displayedNavBar;
    if (this.displayedNavBar) {
      this.navbarConsoles.nativeElement.setAttribute('style', 'width: 75%; flex: none;');
    } else {
      this.navbarConsoles.nativeElement.setAttribute('style', '');
    }
  }

  peripheriqueChange(newPeripherique: number): void {
    this.activePeripherique = newPeripherique;
    this.navbarConsoles.nativeElement.setAttribute('style', '');
  }
}
