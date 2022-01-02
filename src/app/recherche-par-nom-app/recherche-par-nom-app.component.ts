import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appartement } from '../model/appartement.model';
import { AppartementService } from '../service/appartement.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-recherche-par-nom-app',
  templateUrl: './recherche-par-nom-app.component.html',
  styles: [
  ]
})
export class RechercheParNomAppComponent implements OnInit {
  appartements: Appartement[];
  newAppartement = new Appartement();

  constructor(private appartementService: AppartementService,
    public authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.appartementService.listeAppartements().subscribe(apps => {
      console.log(apps);
      this.appartements = apps;
    });
  }
  chercherApp() {
    console.log(this.newAppartement.nomApp);
    this.appartementService.rechercheParNomApp(this.newAppartement.nomApp).subscribe(
      app => {this.appartements = app ;}
    );
}
}
