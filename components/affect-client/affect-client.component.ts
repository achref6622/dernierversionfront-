import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {Client} from '../../model/client';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {Gestionnaire} from '../../model/gestionnaire';

@Component({
  selector: 'app-affect-client',
  templateUrl: './affect-client.component.html',
  styleUrls: ['./affect-client.component.css']
})
export class AffectClientComponent implements OnInit {
  private clients: Client[];
  selectedClient: Client[] = [];
  idGestionnaire: any;
  disable = true;
  constructor(private clientService: ClientService, private route: ActivatedRoute,
              private router: Router, private messageService: MessageService) { }

  ngOnInit() {



    this.idGestionnaire = this.route.snapshot.paramMap.get('id');
    this.clientService.getclientNotAffected().subscribe( data => {
      this.clients = data;
    }, ex =>  {
      console.log(ex);
    });
  }

  affecter() {
    const gestionnaire = new Gestionnaire();
    gestionnaire.id = this.idGestionnaire;
    this.selectedClient.forEach(clt => {clt.gestionnaire = gestionnaire;
    });

    this.clientService.affecte(this.selectedClient).subscribe( data => {
      this.messageService.add({severity: 'success', summary: data.message});
      this.router.navigate(['/gestionaire']);
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur' , detail: 'Operation non effectuée'});
    });
  }

  selectRow($event: any) {
    if (this.selectedClient.length > 0) {
      this.disable = false;
    }
  }

  unSelectRow($event: any) {

    if (this.selectedClient.length === 0) {
      this.disable = true;
    }
  }

  selectAll($event: any) {
    if (this.selectedClient.length > 0) {
      this.disable = false;
    } else {
      this.disable = true;
    }
  }
}
