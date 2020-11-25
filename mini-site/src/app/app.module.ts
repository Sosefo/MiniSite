import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { JeuxComponent } from './jeux/jeux.component';
import { ConsolesComponent } from './consoles/consoles.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeripheriquesComponent } from './peripheriques/peripheriques.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    JeuxComponent,
    ConsolesComponent,
    RessourcesComponent,
    PeripheriquesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
