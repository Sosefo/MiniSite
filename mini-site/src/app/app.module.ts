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



@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    JeuxComponent,
    ConsolesComponent,
    RessourcesComponent,
    PeripheriquesComponent,
    PlanDuSiteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule,
    CarouselModule.forRoot(),
    MatStepperModule,
    MatButtonModule,
    AppRoutingModule,
    MatSidenavModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
