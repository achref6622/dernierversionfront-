import { Component, OnInit } from '@angular/core';
import {Client} from '../../../model/client';
import {ClientService} from '../../../services/client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {GestionnaireService} from '../../../services/gestionnaire.service';

@Component({
  selector: 'app-delet-client',
  templateUrl: './delet-client.component.html',
  styleUrls: ['./delet-client.component.css']
})
export class DeletClientComponent implements OnInit {

  private clients: Client[];
  selectedClient: Client[] = [];
  idGestionnaire: any;
  disable = true;
  constructor(private clientservice : ClientService , private route: ActivatedRoute,
              private router: Router, private messageService: MessageService , private gestionnaireservice: GestionnaireService) { }

  ngOnInit() {

    this.idGestionnaire = this.route.snapshot.paramMap.get('id');
  /*  this.clientService..subscribe( data => {
      this.clients = data;
    }, ex =>  {
      console.log(ex);
    });*/
    this.gestionnaireservice.getclient(this.idGestionnaire).subscribe( data => {
  this.clients = data;
  console.log(data);
}, ex =>  {
  console.log(ex);
});
  }

  deletclient (){
this.clientservice.deletclient(this.selectedClient).subscribe( data => {
  if (data.success) {
    this.messageService.add({severity: 'success', summary: data.message});
    this.router.navigate(['/gestionaire']);

  } else {
    this.messageService.add({severity: 'warn', summary: data.message});
  }
}, ex => {
  this.messageService.add({severity: 'error', summary: 'Erreur de modification :', detail: 'Modification  Non  effectué' });
  console.log(ex);
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
