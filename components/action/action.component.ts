import { Component, OnInit } from '@angular/core';

import {CoursService} from '../../services/cours.service';
import {Cours} from '../../model/cours';
import {Router} from '@angular/router';



@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  cols: any[];
  cours: Cours[] = new Array();
  selectedAction: Cours;

  constructor(private  coursService: CoursService,
              private router: Router) {
  }

  ngOnInit() {
    this.coursService.getAll().subscribe( data => {
      this.cours = data;
    }, ex => {
      console.log(ex);
    });

    this.cols = [
      { field: 'action.nom', header: 'Action' },
      { field: 'date', header: 'Date' },
  { field: 'ouverture', header: 'Ouverture' },
  { field: 'haut', header: 'Haut' },
  { field: 'bas', header: 'Bas' } ,
  { field: 'variation', header: 'Variation' } ,
  { field: 'quantite', header: 'Quantite' } ,
  { field: 'volume', header: 'volume' } ,
  { field: 'qteAchat', header: 'QteAchat' } ,
  { field: 'qteVente', header: 'QteVente'  },
  { field: 'cours', header: 'Cour'  }
];
  }


  onSelectedRow($event: any) {
    this.router.navigate(['/historique', this.selectedAction.action.id]);
  }
}
