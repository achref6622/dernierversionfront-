import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VenteService} from '../../../services/vente.service';
import {Vente} from '../../../model/vente';
import {MessageService} from 'primeng/api';
import {PortefeuilleAction} from '../../../model/portefeuille-action';
import {Action} from '../../../model/action';
import {PortefeuilleActionId} from '../../../model/portefeuille-action-id';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent implements OnInit {
  id: any;
// @ts-ignore
  private vente: Vente = new Vente();

  constructor(private route: ActivatedRoute, private venteservice: VenteService, private messageService: MessageService, private userService: UserService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('param');

  }

  add() {
    this.userService.getUser().subscribe(data => {

      const portefeuillAction = new PortefeuilleAction();
      const action = new Action();
      action.id = Number(this.route.snapshot.paramMap.get('id'));
      portefeuillAction.action = action;
      portefeuillAction.portefeuille = data.portefeuille;
      this.vente.portefeuillAction = portefeuillAction;
      const id = new PortefeuilleActionId();
      id.idAction = Number(this.route.snapshot.paramMap.get('id'));
      id.idPortefeuille = data.portefeuille.id;
      portefeuillAction.id = id;
      this.venteservice.save(this.vente).subscribe(res => {
        if (res.success) {
          this.messageService.add({severity: 'success', summary: res.message});

} else {
  this.messageService.add({severity: 'warn', summary: res.message});
}
}, ex => {
  this.messageService.add({severity: 'error', summary: 'Erreur ', detail: 'vente n\'est pas effectué'});
  // console.log(ex);
  console.log(this.vente);
});
});

}
}
