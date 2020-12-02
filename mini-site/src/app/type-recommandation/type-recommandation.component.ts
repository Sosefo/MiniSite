import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-type-recommandation',
  templateUrl: './type-recommandation.component.html',
  styleUrls: ['./type-recommandation.component.scss']
})
export class TypeRecommandationComponent implements OnInit {

  typeRecommandation: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.typeRecommandation = params.type;
  });
  }

}
