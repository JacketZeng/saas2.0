import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

import { LoginParams } from '../models/login-params';
import { Urls } from '../configs/urls';
import { UtilService } from '../services/util.service';
import { HttpService } from '../services/http.service';

@Injectable()
export class AuthService {

  constructor(private utilService: UtilService, private http: HttpService) { }

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(500),
      tap(val => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  //登录参数检测
  checkIn(params: LoginParams): boolean {
    if (params.account.trim() === '') {
      this.utilService.toolError('请输入您的手机或邮箱账号！', null, { timeOut: 2000 });
      return false;
    }
    if (params.password.trim() === '') {
      this.utilService.toolError('请输入您的登录密码！', null, { timeOut: 2000 });
      return false;
    }
    if (params.verrifyCode.trim() === '') {
      this.utilService.toolError('请输入图形验证码！', null, { timeOut: 2000 });
      return false;
    }
    return true;
  }

  //获取验证码
  getVerrifyImgUrl(): string {
    return Urls.VERRIFY_IMG_URL + '?' + Math.random().toFixed(4);
  }
}