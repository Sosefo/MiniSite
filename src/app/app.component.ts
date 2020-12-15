import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{


  @ViewChild('content', {static: false} ) content: ElementRef;

  constructor(){}

  static docTitle = 'Accessibilité des jeux video dans la vie quotidienne';

  skipLinkPath = '';
  title = 'Accessibilité des jeux video dans la vie quotidienne';

  public skipToMainContent(): void {
    this.content.nativeElement.focus();
  }

}
