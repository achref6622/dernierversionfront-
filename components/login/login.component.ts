import {Component, Inject, OnInit} from '@angular/core';

import {Users} from '../../model/users';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {Client} from '../../model/client';
import {ClientService} from '../../services/client.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private  user: Users = new Users();
  private client: Client = new Client();
  confirmPwd: string;
  display = false;
  constructor(private  authenticationService: AuthenticationService,
              private router: Router,
              private clientService: ClientService,
              private messageService: MessageService) { }

  ngOnInit() {
  }
    authentifier() {
    this.authenticationService.login(this.user).subscribe( response => {
      const token = response.headers.get('Authorization');
      this.authenticationService.storeToken(token);
      this.router.navigate(['']);
    } , ex => {
      this.messageService.add({severity: 'warn', summary: 'Erreur d\'authentification:',
        detail: 'Merci de vérifier votre email ou mot de passe'});
      console.log(ex);
    });
    }


   inscrir() {
    this.clientService.save(this.client).subscribe( data => {
      if (data.success) {
        this.messageService.add({severity: 'success', summary: data.message});
        this.delay();
        location.reload();
           } else {
        this.messageService.add({severity: 'warn', summary: data.message});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur d\'inscription:', detail: 'Inscription n\'est pas effectué' });
      console.log(ex);
    });
  }


  private delay() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }

}
