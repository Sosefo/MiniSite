import { AvisComponent } from './avis/avis.component';
import { PeripheriquesComponent } from './peripheriques/peripheriques.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { ConsolesComponent } from './consoles/consoles.component';
import { JeuxComponent } from './jeux/jeux.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/jeux', pathMatch: 'full'},
  {path : 'jeux', component: JeuxComponent},
  {path : 'consoles', component: ConsolesComponent},
  {path : 'peripheriques', component: PeripheriquesComponent},
  {path : 'recommandations', component: RessourcesComponent},
  {path : 'avis', component: AvisComponent},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
