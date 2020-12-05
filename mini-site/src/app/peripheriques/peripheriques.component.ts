import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


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
  activePeripherique = 1;

  carousel1Src = ['../../assets/manette_hitclic1.PNG','../../assets/manette_hitclic2.PNG'];
  carouselText = [];

  carousel2Src = ['../../assets/xbox_adaptative1.PNG','../../assets/xbox_adaptative2.PNG'];

  carousel3Src = ['../../assets/gaming_kit1.PNG','../../assets/gaming_kit2.PNG'];

  carousel4Src = ['../../assets/handi_joystick1.png','../../assets/handi_joystick1.png','../../assets/handi_joystick3.png'];
  constructor() {
  }



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
