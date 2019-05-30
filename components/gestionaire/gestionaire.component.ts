import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GestionnaireService} from '../../services/gestionnaire.service';
import {Gestionnaire} from '../../model/gestionnaire';
import {Client} from '../../model/client';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-gestionaire',
  templateUrl: './gestionaire.component.html',
  styleUrls: ['./gestionaire.component.css']
})
export class GestionaireComponent implements OnInit {

  constructor( private router: Router , private gestionaireservice: GestionnaireService ,     private messageService: MessageService  ) { }

  gesionairs: Gestionnaire[] = new Array();


  ngOnInit() {
this.getAll() ;

  }


  private getAll() {

  this.gestionaireservice.getAll().subscribe(data => {
      this.gesionairs = data ;
      console.log(data);
    }, ex => {
      console.log(ex);
    });
  }


  affectClient(clt) {
    this.router.navigate(['/affect', clt.id]);
  }
  veraddgestionnaire($event: any) {
    this.router.navigate(['/addgestionnaire']);
  }
  deletclient(clt) {
    this.router.navigate(['/delet', clt.id]);
  }

}
