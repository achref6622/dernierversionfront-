import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Users} from '../../model/users';
import {Router} from '@angular/router';
import {GestionnaireService} from '../../services/gestionnaire.service';
import {MessageService} from 'primeng/api';
import {Client} from '../../model/client';
import {ClientService} from '../../services/client.service';


@Component({
  selector: 'app-client-de-gestionnaire',
  templateUrl: './client-de-gestionnaire.component.html',
  styleUrls: ['./client-de-gestionnaire.component.css']
})
export class ClientDeGestionnaireComponent implements OnInit {
  clients: Client[] = new Array();
  user: Users = new Users();
  selectedclient: Client;
  // tslint:disable-next-line:max-line-length
  constructor( private userService: UserService , private router: Router , private gestionaireservice: GestionnaireService ,     private messageService: MessageService ,  private clientService: ClientService) { }

  ngOnInit() {
   this.getuser() ;


  }
getuser() {
  this.userService.getUser().subscribe(res => {
    this.user = res;
    this.gestionaireservice.getclient(this.user.id).subscribe(r => {
      this.clients = r ;

    }, ex => {
      console.log(ex);
    });

  }, ex => {
    console.log(ex);
  });
}


  onSelectedRow(id: any) {
    this.router.navigate(['/portfeuilleclient', id]);
  }

  addportfeuille(client: Client )  {
    this.clientService.saveportfeuille(client).subscribe( data => {
      if (data.success) {
        this.messageService.add({severity: 'success', summary: data.message}) ;

      } else {
        this.messageService.add({severity: 'warn', summary: data.message});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur :', detail: 'portfeuille n est pas effectuer ' });
      console.log(ex);
    });
  }





}
