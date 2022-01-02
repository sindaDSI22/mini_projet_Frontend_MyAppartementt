import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur: number = 0;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onLoggedin() {
    console.log(this.user);
      this.authService.login(this.user).subscribe((data) => {
        console.log(data);
        let jwToken = data.headers.get('Authorization');
        this.authService.saveToken(jwToken);
        this.router.navigate(['/']);
    },
      (err) => {
        this.erreur = 1;
      });

  }
}
