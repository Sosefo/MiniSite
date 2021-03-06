import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import { AppComponent } from '../app.component';

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

  constructor(private route: ActivatedRoute,private titleService:Title) {    this.route.queryParams.subscribe(params => {
    if (params.console !== undefined) {
      this.activeConsole = params.console;
    }
  }); }

  activeConsole = 1;
  carousel1Src = ['assets/accessibilite_ps4_1.PNG', 'assets/accessibilite_ps4_2.PNG', 'assets/accessibilite_xboxone.jpg'];
  carousel1Labels = ['Différents paramètres d\'accessibilité (PS4)' , 'Configuration des sous titres (PS4)', 'Différents paramètres d\'accessibilité (Xbox One)'];
  carouselAlt = [];
  carousel2Src = ['assets/accessibilite_ps5.PNG', 'assets/accessibilite_xboxseriesx.jpg'];
  carousel2Labels = ['Section transcription de chat (PS5)' , 'Indicateur tactiles des ports (Xbox Series X/S)'];

  ngOnInit(): void {
    this.titleService.setTitle( "Accessibilité dans les consoles | " + AppComponent.docTitle);
    this.displayedNavBar = false;
  }

  displayNav(): void {
    this.displayedNavBar = !this.displayedNavBar;
    if (this.displayedNavBar) {
      this.navbarConsoles.nativeElement.setAttribute('style', 'width: 75%; flex: none; display:block');
    } else {
      this.navbarConsoles.nativeElement.setAttribute('style', '');
    }
  }

  consoleChange(newConsole: number): void {
    this.activeConsole = newConsole;
    this.navbarConsoles.nativeElement.setAttribute('style', '');
  }
}
