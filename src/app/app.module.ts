import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppartementsComponent } from './appartements/appartements.component';
import { AddAppartementComponent } from './add-appartement/add-appartement.component';
import { FormsModule } from '@angular/forms';
import { UpdateAppartementComponent } from './update-appartement/update-appartement.component';

import { HttpClientModule } from '@angular/common/http';
import { RechercheParImmeubleComponent } from './recherche-par-immeuble/recherche-par-immeuble.component';
import { RechercheParNomAppComponent } from './recherche-par-nom-app/recherche-par-nom-app.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';


@NgModule({
  declarations: [
    AppComponent,
    AppartementsComponent,
    AddAppartementComponent,
    UpdateAppartementComponent,
    RechercheParImmeubleComponent,
    RechercheParNomAppComponent,
    LoginComponent,
    ForbiddenComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
