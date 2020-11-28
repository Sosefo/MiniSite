import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  designNote: number;
  accessibilityNote: number;
  values = [0,1,2,3,4,5];

  @ViewChild('confirmationMessage')
  confirmationMessage: ElementRef;

  @ViewChild('formCard')
  formCard: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  send(): void{
    this.formCard.nativeElement.hidden = true;
    this.formCard.nativeElement.setAttribute('aria-hidden', 'true');

    this.confirmationMessage.nativeElement.hidden = false;
    this.confirmationMessage.nativeElement.setAttribute('aria-hidden', 'false');
  }

}
