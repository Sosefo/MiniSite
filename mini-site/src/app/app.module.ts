import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { JeuxComponent } from './jeux/jeux.component';
import { ConsolesComponent } from './consoles/consoles.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    JeuxComponent,
    ConsolesComponent,
    RessourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
