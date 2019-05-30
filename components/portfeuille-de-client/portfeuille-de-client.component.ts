import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Client} from '../../model/client';
import {UserService} from '../../services/user.service';
import {PortfeuilleService} from '../../services/portfeuille.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-portfeuille-de-client',
  templateUrl: './portfeuille-de-client.component.html',
  styleUrls: ['./portfeuille-de-client.component.css']
})
export class PortfeuilleDeClientComponent implements OnInit {
  idClient: any;
  clients: Client[] = new Array();

  constructor(private clientService: ClientService, private route: ActivatedRoute,
              private router: Router , private  portfeuilleService: PortfeuilleService , private messageService: MessageService) { }

  ngOnInit() {
    this.idClient = this.route.snapshot.paramMap.get('id');
    this.clientService.findid(this.idClient).subscribe(r => {
      this.clients [0] = r ;


    }, ex => {
      console.log(ex);
    });
  }


   delet(id: number) {

    this.portfeuilleService.delete(id).subscribe(data => {
      if (data.success) {
        this.messageService.add({severity: 'success', summary: data.message});
        this.delay();
        this.router.navigate(['//clientdegestion']);

      } else {
        this.messageService.add({severity: 'warn', summary: data.message});
      }

    }, ex => {
      console.log(ex);
    });
  }

  private delay() {
    return new Promise(resolve => setTimeout(resolve, 4000));
  }
  gotoupdate(id : any) {
    this.router.navigate(['portfeuilleupdate/', id]);
  }
}

