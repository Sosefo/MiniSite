import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-type-recommandation',
  templateUrl: './type-recommandation.component.html',
  styleUrls: ['./type-recommandation.component.scss']
})
export class TypeRecommandationComponent implements OnInit {

  public safeURL: SafeResourceUrl;
  public typeRecommandation: string;
  constructor(private route: ActivatedRoute, private _sanitizer: DomSanitizer) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Md3x1--gzK0?start=49&end=55');
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.typeRecommandation = params.type;
  });
  }


}
