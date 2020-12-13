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
      this.titleService.setTitle(AppComponent.docTitle + "Recommandations d'accessibilités générales");
    }
    else if(this.typeRecommandation =="Moteur"){
      this.titleService.setTitle(AppComponent.docTitle + "Recommandations d'accessibilités moteurs");
    }
    else if(this.typeRecommandation =="Cognitive"){
      this.titleService.setTitle(AppComponent.docTitle + "Recommandations d'accessibilités cognitives");
    }
    else if(this.typeRecommandation =="Vision"){
      this.titleService.setTitle(AppComponent.docTitle + "Recommandations d'accessibilités visuelles");
    }
    else{
      this.titleService.setTitle(AppComponent.docTitle + "Recommandations d'accessibilités auditives");
    }
  }


}
