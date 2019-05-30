import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import {UserService} from '../../services/user.service';
import {AchatService} from '../../services/achat.service';
import {Ordre} from '../../model/ordre';
import {VenteService} from '../../services/vente.service';
import {Router} from '@angular/router';
import {OrdreService} from '../../services/ordre.service';

@Component({
  selector: 'app-mes-ordres',
  templateUrl: './mes-ordres.component.html',
  styleUrls: ['./mes-ordres.component.css']
})
export class MesOrdresComponent implements OnInit {


  select: any ;

  Ordre: Ordre [] = new  Array() ;
  items: MenuItem[];

ordreselected: any ;
  constructor( private userService: UserService , private messageService: MessageService , private achatservice: AchatService , private venteservice: VenteService ,  private router: Router , private ordreservice: OrdreService) { }

  ngOnInit() {
    this.select = 'achat' ;
    this.getallachat() ;

    this.items = [

      {label: 'anuuler', icon: 'pi pi-times', command: () => {this.annuler(this) ;

        }}
    ];
  }
getallachat() {
  this.userService.getUser().subscribe( data => {
    this.achatservice.getmycachat(data.portefeuille.id).subscribe(res => {
this.Ordre = res ;

console.log(res);
    }, ex => {
      console.log(ex);
    });
  });

}

  getallvente() {
    this.userService.getUser().subscribe( data => {
      this.venteservice.getmyvente(data.portefeuille.id).subscribe(res => {
        this.Ordre = res ;

        console.log(res);
      }, ex => {
        console.log(ex);
      });
    });

  }

  menuselected(val: any) {
    this.customfunction( val) ;
    if (this.select === 'achat') {
this.getallachat() ;
    }  else {
this.getallvente() ;
    }


  }

  customfunction(val: any) {

    this.select = val ;
  }

  gomodifier( id: any) {
    this.router.navigate(['/update', id]);
  }

  annuler(o: any) {
    this.ordreservice.annuler(o).subscribe(data => {
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
