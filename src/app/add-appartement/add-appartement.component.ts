import { Component, OnInit } from '@angular/core';
import { Appartement } from '../model/appartement.model';
import { AppartementService } from '../service/appartement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Immeuble } from '../model/immeuble.model';

@Component({
  selector: 'app-add-appartement',
  templateUrl: './add-appartement.component.html'

})
export class AddAppartementComponent implements OnInit {
  newAppartement = new Appartement();
  immeubles: Immeuble[];
  constructor(private appartementService: AppartementService,
    private router: Router
  ) {

  }

  newIdIm: number;
  newImmeuble: Immeuble;
  ngOnInit(): void {
    this.appartementService.listeImmeuble().subscribe(data => {
      this.immeubles = data;
      console.log(this.immeubles);
    });
  }

  addAppartement() {
    console.log(this.newIdIm);
    this.newImmeuble = this.immeubles.find(imm => imm.idIm == this.newIdIm);
    this.newAppartement.immeuble = this.newImmeuble;
    this.appartementService.ajouterAppartement(this.newAppartement).subscribe(app => {
      console.log(app);
    });
    if(this.newAppartement.immeuble == undefined)
      console.log('insertion error');
    else
      this.router.navigate(['appartements']);


  }

}
