import { Component, OnInit } from '@angular/core';
import {CoursService} from '../../services/cours.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {Local} from 'protractor/built/driverProviders';
import {Cours} from '../../model/cours';
import {ChartHistoriqueService} from '../../services/chart-historique.service';
import {Chart} from '../../model/chart';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-historique-action',
  templateUrl: './historique-action.component.html',
  styleUrls: ['./historique-action.component.css']
})
export class HistoriqueActionComponent implements OnInit {
  isAdmin = false;
  isClient = false;
  isGestionnaire = false;
  visible = false;
  action: any ;
  date1: Date = new Date();
  date2: Date  = new Date();
  id: any;
  data: any;
  chart: Chart [] = new Array() ;
  options: any;
  cours: Cours[] = new Array();
  chartValue: any = [];
  chartLabel: any = [];
  types: any;
  selectedType = '1';
  constructor(private coursSerice: CoursService, private authenticationService: AuthenticationService ,
              private route: ActivatedRoute , private charthistoriqueService: ChartHistoriqueService ,   private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('param');
    this.loadHistory();

    this.charthistoriqueService.chartByDay(this.id).subscribe( data => {
        data.forEach(c => {
          this.chartValue.push(c.yAxis);
          this.chartLabel.push(c.xAxis);
        } );
        this.visible = true;
        this.loadChart();
    },  ex => {
      this.visible = false;
      console.log(ex);
    });


    this.types = [
      {label: 'Ajourd\'hui', value: '1'},
      {label: 'Semaine', value: '2'},
      {label: 'Mois', value: '3'},
      {label: '6 Mois', value: '4'},
    ];

    if (this.authenticationService.getRole() === 'ROLE_Admin') {
      this.isAdmin = true;
    } else  if (this.authenticationService.getRole() === 'ROLE_Client') {
      this.isClient = true;
    }
    if (this.authenticationService.getRole() === 'ROLE_Gestionnaire') {
      this.isGestionnaire = true;
    }

  }

  chercher() {
  this.loadHistory();
  }


 loadChart() {

   this.options = {scales: {
      yAxes: [{ ticks: {min: 0}, responsive: true, maintainAspectRatio: false }]
    }};

   this.data = {
      labels: this.chartLabel,
      datasets: [
        {
         // label: 'First Dataset',
          data: this.chartValue,
          fill: false,
          borderColor: '#4bc0c0'
        }
      ]
    };
  }



 loadHistory() {
    const  datePipe = new DatePipe('en-US');
    this.coursSerice.findHistory(this.id, datePipe.transform(this.date1, 'dd/MM/yyyy'),
      datePipe.transform(this.date2, 'dd/MM/yyyy') ).subscribe( data => {
        this.cours = data ;

    }, ex => {
      console.log(ex);
    });
  }


  loadChartByType(event: any) {
    this.chartValue = [];
    this.chartLabel = [];
    if (this.selectedType === '2') {
      this.charthistoriqueService.chartByWeek(this.id).subscribe(data => {
        data.forEach(c => {
          this.chartValue.push(c.yAxis);
          this.chartLabel.push(c.xAxis);
        });
        this.visible = true;
        this.loadChart();
      }, ex => {
        this.visible = false;
        console.log(ex);
      });
    } else if (this.selectedType === '3') {
      this.charthistoriqueService.chartByMonth(this.id).subscribe(data => {
        data.forEach(c => {
          this.chartValue.push(c.yAxis);
          this.chartLabel.push(c.xAxis);
        });
        this.visible = true;
        this.loadChart();
      }, ex => {
        this.visible = false;
        console.log(ex);
      });
    } else if (this.selectedType === '4') {
      this.charthistoriqueService.chartBySemestre(this.id).subscribe(data => {
        data.forEach(c => {
          this.chartValue.push(c.yAxis);
          this.chartLabel.push(c.xAxis);
        });
        this.visible = true;
        this.loadChart();
      }, ex => {
        this.visible = false;
        console.log(ex);
      });
    } else {
      this.charthistoriqueService.chartByDay(this.id).subscribe(data => {
        data.forEach(c => {
          this.chartValue.push(c.yAxis);
          this.chartLabel.push(c.xAxis);
        });
        this.visible = true;
        this.loadChart();
      }, ex => {
        this.visible = false;
        console.log(ex);
      });
    }
  }
  vente($event: any) {
    this.router.navigate(['/vente', this.id]);
  }
  achat($event: any) {
    this.router.navigate(['/achat', this.id]);
  }
}
