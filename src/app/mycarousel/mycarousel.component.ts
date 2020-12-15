import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CarouselComponent } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-mycarousel',
  templateUrl: './mycarousel.component.html',
  styleUrls: ['./mycarousel.component.css']
})
export class MycarouselComponent implements OnInit,AfterViewInit {


  @Input()labelCarousel : string;
  @Input()
  labels: string[];

  @Input()
  imagesSrc: string[];

  @Input()
  imagesText: string[];

  @ViewChild('carousel')
  carousel: CarouselComponent;

  @ViewChild('playPauseIcon')
  playPauseIcon: MatIcon;

  isStoped = false;
  activeSlide = 0;

  constructor() { }
  ngAfterViewInit(): void {
    this.carousel.play();
  }

  ngOnInit() {

  }


  pause(): void{

    console.log(this.carousel.slides);

    if (!this.isStoped){
      this.carousel.pause();
      this.playPauseIcon._elementRef.nativeElement.innerHTML = 'play_arrow';
      this.carousel.interval = 0;
      this.isStoped = true;

    }
    else{
      this.carousel.play();
      this.playPauseIcon._elementRef.nativeElement.innerHTML = 'pause';
      this.isStoped = false;
      this.carousel.interval = 4500;
    }

  }

}
