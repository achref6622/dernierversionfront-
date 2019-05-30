import { Component, OnInit } from '@angular/core';
import {ActionService} from '../../../services/action.service';
import {Action} from '../../../model/action';
import {ActivatedRoute, Router} from '@angular/router';
import {OrdreService} from '../../../services/ordre.service';
import {Ordre} from '../../../model/ordre';
import {MessageService} from 'primeng/api';
import {PortefeuilleAction} from '../../../model/portefeuille-action';
import {PortefeuilleActionId} from '../../../model/portefeuille-action-id';
import {Achat} from '../../../model/achat';

@Component({
  selector: 'app-update-ordre',
  templateUrl: './update-ordre.component.html',
  styleUrls: ['./update-ordre.component.css']
})
export class UpdateOrdreComponent implements OnInit {
ordre: Ordre = new  Ordre();
  action: any[] = new Array() ;
actionnom: any ;
id: any ;
  // tslint:disable-next-line:max-line-length
  constructor( private Actionservice: ActionService ,   private router: Router , private route: ActivatedRoute , private ordreservice: OrdreService , private messageService: MessageService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getaction() ;
    this.getordre() ;



  }
getaction() {
  this.Actionservice.get().subscribe(res => {
this.action = res ;
  }, ex => {
    console.log(ex);
  });
}

getordre() {
    this.ordreservice.gerordre(this.id).subscribe(res => {
this.ordre = res ;

this.actionnom = this.ordre.portefeuillAction.action.nom ;
     }, ex => {
      console.log(ex);
    });
}

updateordre() {
    this.ordreservice.update(this.ordre).subscribe(data => {
      if (data.success) {
        this.messageService.add({severity: 'success', summary: data.message});

      } else {
        this.messageService.add({severity: 'warn', summary: data.message});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur de modification :', detail: 'Modification  Non  effectué'});
      console.log(ex);
    });


  }





}
