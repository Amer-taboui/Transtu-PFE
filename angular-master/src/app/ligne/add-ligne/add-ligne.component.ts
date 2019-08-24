import { Component, OnInit } from '@angular/core';
import { LigneService } from 'src/app/service/LigneService';

import { Ligne } from 'src/app/ligne';

@Component({
  selector: 'app-add-ligne',
  templateUrl: './add-ligne.component.html',
  styleUrls: ['./add-ligne.component.css']
})
export class CreateligneComponent implements OnInit {

  ligne : Ligne = new Ligne();
  submitted = false;

  constructor(private employeeService: LigneService) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.ligne = new Ligne();
  }

  save() {
    this.employeeService.createLigne(this.ligne)
      .subscribe(data => console.log(data), error => console.log(error));
    this.ligne = new Ligne();
    console.log(this.ligne)
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}