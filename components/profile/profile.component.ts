import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Users} from '../../model/users';
import {Router} from '@angular/router';
import {ClientService} from '../../services/client.service';
import {MessageService} from 'primeng/api';
import {Client} from '../../model/client';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Users = new Users();
  pwd: any = {id: '', oldPassword: '', newPassword: '', confirmPasswrod: ''};
  display = false;

  constructor(private  authenticationService: AuthenticationService,
              private router: Router,
              private userService: UserService,
              private messageService: MessageService) {


  }
  ngOnInit() {
    this.userService.getUser().subscribe( res => {
      this.user = res;
      this.pwd.id = this.user.id;
    }, ex => {
      console.log(ex);
    });

  }
  modifier() {
    this.userService.updateProfil(this.user).subscribe( data => {
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



  changePassword() {
    this.userService.changePassword(this.pwd).subscribe( data => {
      if (data.success) {
        this.messageService.add({severity: 'success', summary: data.message});
        this.delay();
        this.authenticationService.logout();
      } else {
        this.messageService.add({severity: 'warn', summary: data.message});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur de modification :', detail: 'Modification  Non  effectué' });
      console.log(ex);
    });
  }
  private delay() {
    return new Promise(resolve => setTimeout(resolve, 3000));
  }
}
