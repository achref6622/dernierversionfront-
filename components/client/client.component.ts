import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {Client} from '../../model/client';
import {Router} from '@angular/router';
import {Cours} from '../../model/cours';
import {MessageService} from 'primeng/api';
import {Users} from '../../model/users';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clientssgestionaire: Client [] = new Array() ;
  clients: Client[] = new Array();
  private client: Client = new Client();
  selectedClient: Client[] = [];
  disable = true;
  isAdmin = false;
  isClient = false;
  isGestionnaire = false;
  constructor(private  clientService: ClientService, private router: Router ,     private messageService: MessageService ,
              private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {

    this.getAll();
    if (this.authenticationService.getRole() === 'ROLE_Admin') {
      this.isAdmin = true;
    } else  if (this.authenticationService.getRole() === 'ROLE_Client') {
      this.isClient = true;
    }
    if (this.authenticationService.getRole() === 'ROLE_Gestionnaire') {
      this.isGestionnaire = true;
    }
  }

  private getAll() {

    this.clientService.getAll().subscribe(data => {
      this.clients = data;
      console.log(data);
    }, ex => {
      console.log(ex);
    });
  }

  onSelectedRow($event: any) {
    this.router.navigate(['/portfeuille']);
  }

  private delet() {

    console.log(this.selectedClient) ;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.selectedClient.length; i++) {
      this.clientService.delete(this.selectedClient[i].id).subscribe(data => {
        if (data.success) {
          this.messageService.add({severity: 'success', summary: data.message});
          this.delay() ;

        } else {
          this.messageService.add({severity: 'warn', summary: data.message});
        }

      }, ex => {
        console.log(ex);
      }) ;
    }


  /*  this.clientService.delete().subscribe(data => {
      if (data.success) {
        console.log(data);
        this.messageService.add({severity: 'success', summary: data.message});
        this.delay();
        location.reload();
      } else {
        this.messageService.add({severity: 'warn', summary: data.message});
      }

    }, ex => {
      console.log(ex);
    }); */
  }

  private delay() {
    return new Promise(resolve => setTimeout(resolve, 2000));
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

