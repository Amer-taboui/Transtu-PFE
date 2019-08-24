import { Component, OnInit } from '@angular/core';

import { Ligne } from 'src/app/ligne';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { LigneService } from 'src/app/service/LigneService';

@Component({
  selector: 'app-employee',
  templateUrl: './liste-ligne.component.html',
  styleUrls: ['./liste-ligne.component.css']
})
export class ligneListComponent implements OnInit {
  lignes: any[]=[];

  constructor(private ligneService: LigneService,
              private router: Router) {
              }
  lineTypes =  ["Urbain","SubUrbain","Scolaire"]
  reseaux   =  ["Métro","Bus","TGM" ]
  depots     =  ["Depot charguia","Depot Ben arous"]
  filter = {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.ligneService.getEmployeesList().subscribe( res =>{
      this.lignes=res;
      console.log(this.lignes)

    });
  }

  deleteLigne(id: number) {
    this.ligneService.deleteLigne(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  submitFilter(filter) {
    console.log(filter)
    this.filter = {};
  }

}