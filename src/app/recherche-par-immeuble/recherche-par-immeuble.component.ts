import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appartement } from '../model/appartement.model';
import { Immeuble } from '../model/immeuble.model';
import { AppartementService } from '../service/appartement.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-recherche-par-immeuble',
  templateUrl: './recherche-par-immeuble.component.html',
  styles: [
  ]
})
export class RechercheParImmeubleComponent implements OnInit {
  appartements: Appartement[];
  immeubles : Immeuble[];
  
  constructor(private appartementService: AppartementService,
    public authService: AuthService,
    private router: Router) {


  }
  
  IdImm : number;
  ngOnInit(): void {
    this.appartementService.listeImmeuble().subscribe(data => {
      this.immeubles = data;
      console.log(this.immeubles);
    });
    this.appartementService.listeAppartements().subscribe(apps => {
      console.log(apps);
      this.appartements = apps;
    });

  }
  onChange() {
    console.log(this.IdImm);
    this.appartementService.rechercherParImmeuble(this.IdImm).subscribe(
      app => {this.appartements = app ;}
    );
}
  
}

