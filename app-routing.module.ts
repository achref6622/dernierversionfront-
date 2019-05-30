import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TemplateComponent} from './templates/template/template.component';
import {ClientComponent} from './components/client/client.component';

import {LoginComponent} from './components/login/login.component';
import {AuthGuardService} from './services/auth-guard.service';
import {ProfileComponent} from './components/profile/profile.component';
import {ActionComponent} from './components/action/action.component';
import {HistoriqueActionComponent} from './components/historique-action/historique-action.component';
import {PortfeuilleComponent} from './components/portfeuille/portfeuille.component';
import {GestionaireComponent} from './components/gestionaire/gestionaire.component';
import {AffectClientComponent} from './components/affect-client/affect-client.component';
import {ClientDeGestionnaireComponent} from './components/client-de-gestionnaire/client-de-gestionnaire.component';
import {PortfeuilleDeClientComponent} from './components/portfeuille-de-client/portfeuille-de-client.component';
import {UpdatePortfeuilleComponent} from './components/update-portfeuille/update-portfeuille.component';
import {AddGestionnaireComponent} from './components/gestionaire/add-gestionnaire/add-gestionnaire.component';
import {AchatComponent} from './components/historique-action/achat/achat.component';
import {VenteComponent} from './components/historique-action/vente/vente.component';
import {DeletClientComponent} from './components/gestionaire/delet-client/delet-client.component';
import {OrdreComponent} from './components/ordre/ordre.component';
import {MesOrdresComponent} from './components/mes-ordres/mes-ordres.component';
import {UpdateOrdreComponent} from './components/mes-ordres/update-ordre/update-ordre.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},

  {path: '', component: TemplateComponent, canActivate : [AuthGuardService] , children: [
      {path: 'client', component: ClientComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'action', component: ActionComponent},
      {path: 'historique/:param', component: HistoriqueActionComponent},
      {path: 'portfeuille', component: PortfeuilleComponent},
      {path: 'gestionaire', component: GestionaireComponent },
      {path: 'affect/:id', component: AffectClientComponent },
      {path: 'clientdegestion', component: ClientDeGestionnaireComponent },
      {path: 'portfeuilleclient/:id', component:  PortfeuilleDeClientComponent } ,
      {path: 'portfeuilleupdate/:id', component:  UpdatePortfeuilleComponent },
      {path: 'portfeuilleupdate/:id', component:  UpdatePortfeuilleComponent },
      {path: 'addgestionnaire', component:  AddGestionnaireComponent },
      {path: 'achat/:id', component:  AchatComponent },
      {path: 'vente/:id', component: VenteComponent },
      {path: 'delet/:id', component:  DeletClientComponent },
      {path: 'order', component:  OrdreComponent },
      {path: 'mesorders', component:  MesOrdresComponent } ,
      {path: 'update/:id', component:  UpdateOrdreComponent }


    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
