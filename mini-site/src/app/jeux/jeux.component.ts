import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

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

  constructor(private sanitizer: DomSanitizer) {
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/zssOx81k768');
  }

  activeSlide = 0;

  activeJeu = 1;

  transcriptionPanelOpen = false;

  ngOnInit(): void {
    this.displayedNavBar = false;
  }

  displayNav(): void {
    this.displayedNavBar = !this.displayedNavBar;
    if (this.displayedNavBar) {
      this.navbarJeux.nativeElement.setAttribute('style', 'width: 75%; flex: none;');
    } else {
      this.navbarJeux.nativeElement.setAttribute('style', '');
    }
  }

  jeuChange(newConsole: number): void {
    this.activeJeu = newConsole;
    this.navbarJeux.nativeElement.setAttribute('style', '');
  }
}
