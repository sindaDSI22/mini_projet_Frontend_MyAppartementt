import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppartementsComponent } from './appartements/appartements.component';
import { AddAppartementComponent } from './add-appartement/add-appartement.component';
import { UpdateAppartementComponent } from './update-appartement/update-appartement.component';
import { RechercheParImmeubleComponent } from './recherche-par-immeuble/recherche-par-immeuble.component';
import { RechercheParNomAppComponent } from './recherche-par-nom-app/recherche-par-nom-app.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AppartementGuard } from './appartement.guard';



const routes: Routes = [
  { path: "appartements",component: AppartementsComponent },
  {path: "add-appartement",component: AddAppartementComponent ,canActivate:[AppartementGuard]},
  { path: "", redirectTo: "appartements", pathMatch: "full" },
  {path: "updateAppartement/:id", component: UpdateAppartementComponent},
  {path: "rechercheParImmeuble", component : RechercheParImmeubleComponent},
  {path: "rechercheParNomApp", component : RechercheParNomAppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forbidden', component: ForbiddenComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
