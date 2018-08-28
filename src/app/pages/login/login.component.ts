import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginParams } from '../../models/login-params';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  params: LoginParams;

  ngOnInit() {
    this.params = new LoginParams('1', '2', '3');
    this.params.verrifyImgUrl = this.authService.getVerrifyImgUrl();
    this.params.verrifyCode
  }

  changeVerrifyImg() {
    this.params.verrifyImgUrl = this.authService.getVerrifyImgUrl();
  }

  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    if (this.authService.checkIn(this.params)) {
      this.authService.login().subscribe(() => {
        this.setMessage();
        if (this.authService.isLoggedIn) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';

          // Redirect the user
          this.router.navigate([redirect]);
        }
      });
    }
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
