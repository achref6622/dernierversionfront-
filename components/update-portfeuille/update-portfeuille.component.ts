import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Client} from '../../model/client';
import {ClientService} from '../../services/client.service';
import {PortfeuilleService} from '../../services/portfeuille.service';
import {MessageService} from 'primeng/api';
import {Portefeuille} from '../../model/portefeuille';

@Component({
  selector: 'app-update-portfeuille',
  templateUrl: './update-portfeuille.component.html',
  styleUrls: ['./update-portfeuille.component.css']
})
export class UpdatePortfeuilleComponent implements OnInit {

  idClient: any;
  clients: Client[] = new Array();
  client: Client ;
  portf: Portefeuille ;
  constructor( private router: Router ,  private route: ActivatedRoute, private clientService: ClientService, private  portfeuilleService: PortfeuilleService  , private messageService: MessageService ) { }

  ngOnInit() {

    this.idClient = this.route.snapshot.paramMap.get('id');
    this.clientService.findid(this.idClient).subscribe(r => {
      this.client =r ;
      this.clients [0] = r ;


    }, ex => {
      console.log(ex);
    });

  }




  modifier() {
    this.portfeuilleService.updateportfeuille(this.client.portefeuille).subscribe( data => {
      if (data.success) {
        this.messageService.add({severity: 'success', summary: data.message});

      } else {
        this.messageService.add({severity: 'warn', summary: data.message});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur de modification :', detail: 'Modification  Non  effectué' });
      console.log(ex);
    });
  }

}
