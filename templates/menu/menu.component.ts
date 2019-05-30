import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Users} from '../../model/users';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user: Users = new Users();
  isAdmin = false;
  isClient = false;
  isGestionnaire = false;
  constructor(private authenticationService: AuthenticationService,
              private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe( res => {
      this.user = res;
    }, ex => {
      console.log(ex);
    });

    if (this.authenticationService.getRole() === 'ROLE_Admin') {
      this.isAdmin = true;
    } else  if (this.authenticationService.getRole() === 'ROLE_Client') {
      this.isClient = true;
    }
    if (this.authenticationService.getRole() === 'ROLE_Gestionnaire') {
      this.isGestionnaire = true;
    }
  }

}
