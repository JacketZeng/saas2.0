import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginParams } from '../../models/login-params';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  params: LoginParams;

  loading: boolean;

  ngOnInit() {
    this.params = new LoginParams('1', '2', '3');
    this.params.verrifyImgUrl = this.authService.getVerrifyImgUrl();
    this.params.verrifyCode
  }

  changeVerrifyImg() {
    this.params.verrifyImgUrl = this.authService.getVerrifyImgUrl();
  }

  constructor(public authService: AuthService, public router: Router) {
  }

  login() {
    if (this.authService.checkIn(this.params)) {
      this.loading = true;
      this.authService.login().subscribe(() => {
        if (this.authService.isLoggedIn) {
          let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'user';
          // Set our navigation extras object
          // that passes on our global query params and fragment
          let navigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
          };

          // Redirect the user
          // this.router.navigate([redirect], navigationExtras);
          this.router.navigate([redirect]);

          this.loading = false;
        }
      });
    }
  }

  logout() {
    this.authService.logout();
  }
}
