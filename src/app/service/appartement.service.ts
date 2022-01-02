import { Injectable } from '@angular/core';
import { Appartement } from '../model/appartement.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Immeuble } from '../model/immeuble.model';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class AppartementService {

  // appartements: Appartement[];
  apiURL: string = 'http://localhost:8083/appartement/api';

  immeubles: Immeuble[];
  immeuble = new Immeuble();
  appartementsRecherche: Appartement[];
  constructor(private http: HttpClient,
    private authService: AuthService) {

  }

  listeAppartements(): Observable<Appartement[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<Appartement[]>(this.apiURL + "/all", { headers: httpHeaders }
    );

  }

  ajouterAppartement(app: Appartement): Observable<Appartement> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.post<Appartement>(this.apiURL, app, { headers: httpHeaders });

  }



  supprimerAppartement(id: number) {
    const url = `${this.apiURL}/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.delete(url, { headers: httpHeaders });


  }


  consulterAppartement(id: number): Observable<Appartement> {
    const url = `${this.apiURL}/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<Appartement>(url, { headers: httpHeaders });

  }
  
  updateAppartement(app: Appartement): Observable<Appartement> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.put<Appartement>(this.apiURL, app, { headers: httpHeaders });
  }

  listeImmeuble(): Observable<Immeuble[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<Immeuble[]>(this.apiURL + "/immeubles", { headers: httpHeaders }
    );
  }

  consulterImmeuble(id: number): Immeuble {
    this.immeuble = this.immeubles.find(im => im.idIm == id);
    return this.immeuble;
  }

  rechercherParImmeuble(id: number): Observable<Appartement[]> {
    /*const url = `${this.apiURL}/appImm/${id}`;
    return this.http.get<Appartement[]>(url);*/
    const url = `${this.apiURL}/appImm/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<Appartement[]>(url, { headers: httpHeaders }
    );

  }

  rechercheParNomApp(nom: string): Observable<Appartement[]> {
    /* const url = `${this.apiURL}/nom/${nom}`;
    return this.http.get<Appartement[]>(url); */
    const url = `${this.apiURL}/nom/${nom}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<Appartement[]>(url, { headers: httpHeaders }
    );
  }


  /*
    trierAppartements() {
      this.appartements = this.appartements.sort((n1, n2) => {
        if (n1.id_app > n2.id_app) {
          return 1;
        }
        if (n1.id_app < n2.id_app) {
          return -1;
        }
        return 0;
      });
    }
    */

  


}