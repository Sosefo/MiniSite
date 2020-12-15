import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  designNote: number;
  accessibilityNote: number;
  designNoteError: boolean;
  accessibilityNoteError: boolean;
  values = [0, 1, 2, 3, 4, 5];

  @ViewChild('confirmationMessage')
  confirmationMessage: ElementRef;

  @ViewChild('formCard')
  formCard: ElementRef;

  constructor(private titleService:Title) {
  }

  ngOnInit() {
    this.titleService.setTitle("Donnez nous notre avis | " + AppComponent.docTitle);
    this.designNoteError = false;
    this.accessibilityNoteError = false;
  }

  designUpdate(): void {
    this.designNoteError = (this.designNote === undefined);
  }

  accessibilityUpdate(): void {
    this.accessibilityNoteError = (this.accessibilityNote === undefined);
  }

  send(): void{
    this.designNoteError = (this.designNote === undefined);
    this.accessibilityNoteError = (this.accessibilityNote === undefined);
    if (!this.designNoteError && !this.accessibilityNoteError) {
      this.formCard.nativeElement.hidden = true;
      this.formCard.nativeElement.setAttribute('aria-hidden', 'true');

      this.confirmationMessage.nativeElement.hidden = false;
      this.confirmationMessage.nativeElement.setAttribute('aria-hidden', 'false');
    }
  }

}
