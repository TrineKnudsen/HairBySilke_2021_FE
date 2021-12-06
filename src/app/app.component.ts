import { Component } from '@angular/core';
import {AuthService} from "./auth/shared/auth.service";
import {Router} from "@angular/router";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jwt: string | null | undefined;

  constructor(private _auth: AuthService, private _router: Router) {
    _auth.isLoggedIn$.subscribe(jwt => {
      this.jwt = jwt;
    })
  }
  title = 'Hair By Silke';

  logout() {
    this._auth.logout()
      .subscribe(loggedOut => {
        this._router.navigateByUrl('about')
      });
  }
}
