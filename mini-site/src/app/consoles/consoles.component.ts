import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.css']
})
export class ConsolesComponent implements OnInit {

  @ViewChild('navbarConsoles')
  navbarConsoles: ElementRef;

  @ViewChild('navbarConsolesCollapse')
  navbarConsolesCollapse: ElementRef;

  displayedNavBar: boolean;

  constructor() { }

  activeSlide = 0;

  activeConsole = 1;

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
}
