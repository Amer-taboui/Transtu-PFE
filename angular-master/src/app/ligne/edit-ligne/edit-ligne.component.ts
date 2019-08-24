import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { LigneService } from 'src/app/service/LigneService';

import { Ligne } from 'src/app/ligne'
import { Router, Route, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-ligne',
  templateUrl: './edit-ligne.component.html',
  styleUrls: ['./edit-ligne.component.css']
})
export class EditLigneComponent implements OnInit {
  
  id:string;
  ligne:Ligne;
  constructor(private employeeService : LigneService, private route :ActivatedRoute) { }

  ngOnInit() {
    this.id =this.route.snapshot.paramMap.get('id');
    this.employeeService.getLignesById(parseInt(this.id)).subscribe( res => {
      this.ligne=res;
      console.log(this.ligne);
    })

    }

    update(){
      this.employeeService.updateLigne(parseInt(this.id),this.ligne).subscribe(res => {
        console.log(res);
      })
    }
    

  
}



  
  

