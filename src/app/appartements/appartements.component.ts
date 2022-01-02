import { Component, OnInit } from '@angular/core';
import { Appartement } from '../model/appartement.model';
import { AppartementService } from '../service/appartement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-appartements',
  templateUrl: './appartements.component.html'

})
export class AppartementsComponent implements OnInit {
  appartements: Appartement[];

  constructor(private appartementService: AppartementService,
    public authService: AuthService,
    private router: Router) {
    //  this.appartements = appartementService.listeAppartements();

  }

  ngOnInit(): void {

    this.appartementService.listeAppartements().subscribe(apps => {
      console.log(apps);
      this.appartements = apps;
    });

  }

  supprimerAppartement(app: Appartement) {


    let conf = confirm("Etes-vous sûr ?");

    if (conf)
      this.appartementService.supprimerAppartement(app.idApp).subscribe(() => {
        console.log("appartement supprimé");
      });
    this.router.navigate(['appartements']).then(() => {
      this.SuprimerAppartementDuTableau(app);
    });

  }
  SuprimerAppartementDuTableau(app: Appartement) {
    this.appartements.forEach((cur, index) => {
      if (app.idApp === cur.idApp) {
        this.appartements.splice(index, 1);
      }
    });
  }

}
