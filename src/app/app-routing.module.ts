import { AcceuilComponent } from './acceuil/acceuil.component';
import { TypeRecommandationComponent } from './type-recommandation/type-recommandation.component';
import { AvisComponent } from './avis/avis.component';
import { PeripheriquesComponent } from './peripheriques/peripheriques.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { ConsolesComponent } from './consoles/consoles.component';
import { JeuxComponent } from './jeux/jeux.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlanComponent} from './plan/plan.component';
import {SourcesComponent} from './sources/sources.component';


const routes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: AcceuilComponent},
  {path : 'jeux', component: JeuxComponent},
  {path : 'consoles', component: ConsolesComponent},
  {path : 'peripheriques', component: PeripheriquesComponent},
  {path : 'recommandations', component: RessourcesComponent},
  {path : 'avis', component: AvisComponent},
  {path: 'recommandations/type-recommandation', component : TypeRecommandationComponent},
  {path: 'plan', component: PlanComponent},
  { path: 'sources', component: SourcesComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
