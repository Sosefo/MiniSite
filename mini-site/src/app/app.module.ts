import { MatSidenavModule } from '@angular/material/sidenav';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { JeuxComponent } from './jeux/jeux.component';
import { ConsolesComponent } from './consoles/consoles.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeripheriquesComponent } from './peripheriques/peripheriques.component';
import { PlanDuSiteComponent } from './plan-du-site/plan-du-site.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { AvisComponent } from './avis/avis.component';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { TypeRecommandationComponent } from './type-recommandation/type-recommandation.component';
import { MycarouselComponent } from './mycarousel/mycarousel.component';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    JeuxComponent,
    ConsolesComponent,
    RessourcesComponent,
    PeripheriquesComponent,
    PlanDuSiteComponent,
    AvisComponent,
      TypeRecommandationComponent,
      TypeRecommandationComponent,
      MycarouselComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule,
    CarouselModule.forRoot(),
    MatStepperModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatRadioModule,
    AppRoutingModule,
    MatSidenavModule,
    MatExpansionModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
