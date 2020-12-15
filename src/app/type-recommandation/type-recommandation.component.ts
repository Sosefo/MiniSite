import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, Title } from '@angular/platform-browser';
import { ActivatedRoute} from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-type-recommandation',
  templateUrl: './type-recommandation.component.html',
  styleUrls: ['./type-recommandation.component.scss']
})
export class TypeRecommandationComponent implements OnInit {

  public typeRecommandation: string;

  constructor(private route: ActivatedRoute,private titleService:Title) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.typeRecommandation = params.type;
    });

    if(this.typeRecommandation =="Général"){
      this.titleService.setTitle("Recommandations d'accessibilités générales | " + AppComponent.docTitle );
    }
    else if(this.typeRecommandation =="Moteur"){
      this.titleService.setTitle("Recommandations d'accessibilités moteurs | "+AppComponent.docTitle);
    }
    else if(this.typeRecommandation =="Cognitive"){
      this.titleService.setTitle( "Recommandations d'accessibilités cognitives | " + AppComponent.docTitle);
    }
    else if(this.typeRecommandation =="Vision"){
      this.titleService.setTitle( "Recommandations d'accessibilités visuelles | " + AppComponent.docTitle);
    }
    else{
      this.titleService.setTitle("Recommandations d'accessibilités auditives | " + AppComponent.docTitle);
    }
  }


}
