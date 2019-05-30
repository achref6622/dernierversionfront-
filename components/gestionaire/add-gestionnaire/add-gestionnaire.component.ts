import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Client} from '../../../model/client';
import {Gestionnaire} from '../../../model/gestionnaire';
import {GestionnaireService} from '../../../services/gestionnaire.service';
import {MessageService} from 'primeng/api';
import {Admin} from '../../../model/admin';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-add-gestionnaire',
  templateUrl: './add-gestionnaire.component.html',
  styleUrls: ['./add-gestionnaire.component.css']
})
export class AddGestionnaireComponent implements OnInit {
  admin: Admin = new Admin();

 gestionaire: Gestionnaire = new Gestionnaire();
  constructor(  private router: Router, private gestionaireservice: GestionnaireService ,     private messageService: MessageService , private  adminservice: AdminService) { }

  ngOnInit() {
  }
  inscrir() {
    this.gestionaireservice.save(this.gestionaire).subscribe( data => {
      if (data.success) {
        this.messageService.add({severity: 'success', summary: data.message});
        this.delay() ;
        this.router.navigate(['/gestionaire']);

      } else {
        this.messageService.add({severity: 'warn', summary: data.message});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur d\'inscription:', detail: 'Inscription n\'est pas effectué' });
      console.log(ex);
    });
  }
  inscriradmin() {
    this.adminservice.save(this.admin).subscribe( data => {
      if (data.success) {
        this.messageService.add({severity: 'success', summary: data.message});
        this.delay() ;
        this.router.navigate(['/gestionaire']);

      } else {
        this.messageService.add({severity: 'warn', summary: data.message});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur d\'inscription:', detail: 'Inscription n\'est pas effectué' });
      console.log(ex);
    });
  }
  private delay() {
    return new Promise(resolve => setTimeout(resolve, 20000));
  }


}
