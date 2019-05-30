import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './components/client/client.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {
  CalendarModule,
  ChartModule, DropdownModule,
  InputTextModule,
  KeyFilterModule,
  MessageService,
  MessagesModule, MultiSelectModule,
  PasswordModule, SelectButtonModule, SplitButtonModule
} from 'primeng/primeng';
import { HeaderComponent } from './templates/header/header.component';
import { MenuComponent } from './templates/menu/menu.component';
import { FooterComponent } from './templates/footer/footer.component';
import { ContentComponent } from './templates/content/content.component';
import { TemplateComponent } from './templates/template/template.component';
import { LoginComponent } from './components/login/login.component';

import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JwtInterceptorService} from './services/jwt-interceptor.service';
import { ProfileComponent } from './components/profile/profile.component';
import { ActionComponent } from './components/action/action.component';
import { HistoriqueActionComponent } from './components/historique-action/historique-action.component';
import { PortfeuilleComponent } from './components/portfeuille/portfeuille.component';
import { GestionaireComponent } from './components/gestionaire/gestionaire.component';
import { AffectClientComponent } from './components/affect-client/affect-client.component';
import { ClientDeGestionnaireComponent } from './components/client-de-gestionnaire/client-de-gestionnaire.component';
import { PortfeuilleDeClientComponent } from './components/portfeuille-de-client/portfeuille-de-client.component';
import { UpdatePortfeuilleComponent } from './components/update-portfeuille/update-portfeuille.component';
import { AddGestionnaireComponent } from './components/gestionaire/add-gestionnaire/add-gestionnaire.component';
import { AchatComponent } from './components/historique-action/achat/achat.component';
import { VenteComponent } from './components/historique-action/vente/vente.component';
import { DeletClientComponent } from './components/gestionaire/delet-client/delet-client.component';
import { OrdreComponent } from './components/ordre/ordre.component';
import { MesOrdresComponent } from './components/mes-ordres/mes-ordres.component';
import { UpdateOrdreComponent } from './components/mes-ordres/update-ordre/update-ordre.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ContentComponent,
    TemplateComponent,
    LoginComponent,
    ProfileComponent,
    ActionComponent,
    HistoriqueActionComponent,
    PortfeuilleComponent,
    GestionaireComponent,
    AffectClientComponent,
    ClientDeGestionnaireComponent,
    PortfeuilleDeClientComponent,
    UpdatePortfeuilleComponent,
    AddGestionnaireComponent,
    AchatComponent,
    VenteComponent,
    DeletClientComponent,
    OrdreComponent,
    MesOrdresComponent,
    UpdateOrdreComponent
  ],
  imports: [
    SelectButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    ToastModule,
    KeyFilterModule,
    CalendarModule,
    ChartModule,
    MessagesModule,
    DropdownModule,
    SplitButtonModule,
    MultiSelectModule
  ],
  providers: [MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
