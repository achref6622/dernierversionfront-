import { Component, OnInit } from '@angular/core';
import {Achat} from '../../../model/achat';
import {AchatService} from '../../../services/achat.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {PortefeuilleAction} from '../../../model/portefeuille-action';
import {Action} from '../../../model/action';
import {UserService} from '../../../services/user.service';
import {PortefeuilleActionId} from '../../../model/portefeuille-action-id';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent implements OnInit {
  achat = new Achat();
  constructor(private achatService: AchatService, private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService, private userService: UserService) { }

  ngOnInit() {
  }

  acheter() {




    this.userService.getUser().subscribe( data => {
      const portefeuillAction = new PortefeuilleAction();
      const action = new Action();
      action.id = Number(this.route.snapshot.paramMap.get('id'));
      portefeuillAction.action = action;
      portefeuillAction.portefeuille = data.portefeuille;
      this.achat.portefeuillAction = portefeuillAction ;
      const id = new PortefeuilleActionId();
      id.idAction = Number(this.route.snapshot.paramMap.get('id'));
      id.idPortefeuille = data.portefeuille.id;
      portefeuillAction.id = id;
      this.achatService.save(this.achat).subscribe( res => {
        if (res.success ) {
          this.messageService.add({severity: 'success', summary: res.message});
          this.router.navigate(['/historique', action.id]);
        } else {
          this.messageService.add({severity: 'warn', summary: res.message});
        }
      }, ex => {
        console.log(ex);
      });
    });



  }

}
