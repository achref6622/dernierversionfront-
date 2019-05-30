import { Component, OnInit } from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';
import {Ordre} from '../../model/ordre';
import {OrdreService} from '../../services/ordre.service';
import {Achat} from '../../model/achat';
import {Vente} from '../../model/vente';
import {VenteService} from '../../services/vente.service';
import {AchatService} from '../../services/achat.service';

@Component({
  selector: 'app-ordre',
  templateUrl: './ordre.component.html',
  styleUrls: ['./ordre.component.css']
})
export class OrdreComponent implements OnInit {
select: any ;
Order: Ordre [] = new Array();
  constructor(private Ordreservice: OrdreService , private achatservice: AchatService , private venteservice : VenteService) { }

  ngOnInit() {
this.select = 'tous' ;
this.getAll() ;

  }
  private getAll() {

    this.Ordreservice.getAll().subscribe(data => {
      this.Order = data ;

      console.log(data);
    }, ex => {
      console.log(ex);
    });
  }

  private getachat() {

    this.achatservice.getAll().subscribe(data => {
    this.Order = data ;

    console.log(data);
    }, ex => {
      console.log(ex);
    });
  }
private getvente() {
  this.venteservice.getAll().subscribe(data => {
    this.Order = data ;

    console.log(data);
  }, ex => {
    console.log(ex);
  });
}



menuselected(val: any) {
    this.customfunction( val) ;
    if (this.select === 'tous') {
    this.getAll() ;
  } else if (this.select === 'achat') {
    this.getachat() ;
  } else {
    this.getvente() ;
  }


}

customfunction(val: any) {

    this.select = val ;
}




}
