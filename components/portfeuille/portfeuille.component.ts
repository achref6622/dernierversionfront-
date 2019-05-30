import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {MessageService} from 'primeng/api';
import {Client} from '../../model/client';
import {ClientService} from '../../services/client.service';
import {Users} from '../../model/users';


@Component({
  selector: 'app-portfeuille',
  templateUrl: './portfeuille.component.html',
  styleUrls: ['./portfeuille.component.css']
})
export class PortfeuilleComponent implements OnInit {
  clients: Client[] = new Array();
  client: Client = new Client();
  user: Users = new Users();


  constructor(  private router: Router ,
                private clientService: ClientService, private userService: UserService
                ) { }

  ngOnInit() {

   // this.id = this.route.snapshot.paramMap.get('param');


this.getuser() ;

  }

getuser () {
  this.userService.getUser().subscribe( res => {
    this.user = res;
    this.clientService.findid(this.user.id).subscribe(r => {
this.clients [0] = r ;
console.log(r) ;

    }, ex => {
      console.log(ex);
    });
  }, ex => {
    console.log(ex);
  });
}




}
