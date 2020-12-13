import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer, Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent implements OnInit {
  safeURL: any;
  @ViewChild('navbarJeux')
  navbarJeux: ElementRef;

  @ViewChild('navbarJeuxCollapse')
  navbarJeuxCollapse: ElementRef;

  displayedNavBar: boolean;

  carouselSrc = ['assets/visuel1_TLOU2.png', 'assets/visuel2_TLOU2.png', 'assets/visuel3_TLOU2.png', 'assets/visuel4_TLOU2.png'];
  carouselAlt = ['Affichage par défaut dans The Last of Us 2', 'Affichage numéro 1 dans The Last of Us 2 : (Alliés en vert)', 'Affichage numéro 2 dans The Last of Us 2 : (Alliés en bleu)', 'Affichage numéro 3 dans The Last of Us 2 : (Alliés en bleu, enemis en rouge)'];

  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute,private titleService:Title) {
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/zssOx81k768');
  }

  activeJeu = 1;

  transcriptionPanelOpen = false;

  ngOnInit(): void {
    this.titleService.setTitle(AppComponent.docTitle + "Accessibilité dans les jeux");
    this.route.queryParams.subscribe(params => {
      if (params.jeu !== undefined) {
        this.activeJeu = params.jeu;
      }
    });
    this.displayedNavBar = false;
  }

  displayNav(): void {
    this.displayedNavBar = !this.displayedNavBar;
    if (this.displayedNavBar) {
      this.navbarJeux.nativeElement.setAttribute('style', 'width: 75%; flex: none; display:block;');
    } else {
      this.navbarJeux.nativeElement.setAttribute('style', '');
    }
  }

  jeuChange(newConsole: number): void {
    this.activeJeu = newConsole;
    this.navbarJeux.nativeElement.setAttribute('style', '');
  }
}
