import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AppartementService } from '../service/appartement.service';
import { Appartement } from '../model/appartement.model';
import { Immeuble } from '../model/immeuble.model';
@Component({
  selector: 'app-update-appartement',
  templateUrl: './update-appartement.component.html',
  styles: [
  ]
})
export class UpdateAppartementComponent implements OnInit {
  currentAppartement = new Appartement();
  immeubles : Immeuble[];
  currentIm = new Immeuble();
  constructor(private activatedRoute: ActivatedRoute,
    private appartementService: AppartementService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.appartementService.consulterAppartement(this.activatedRoute.snapshot.params.id).
      subscribe(app => { 
        this.currentAppartement = app; 
        this.currentIm = app.immeuble;
      });
    this.appartementService.listeImmeuble().subscribe( data => {
      this.immeubles = data;
      console.log(this.immeubles);
    })
  }


  updateAppartement() {
    this.currentIm = this.immeubles.find(imm => imm.idIm == this.currentIm.idIm);
    this.currentAppartement.immeuble = this.currentIm;
    this.appartementService.updateAppartement(this.currentAppartement).subscribe(app => {
      this.router.navigate(['appartements']);
    }, (error) => { alert("Problème lors de la modification !"); }
    );

  }


}
